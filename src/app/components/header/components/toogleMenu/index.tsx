import styled from 'styled-components';
import {useState, useEffect} from 'react';
import useScreenSize from '@/hooks/useScreenSize';

export interface MenuItem {
    text: string;
    href?: string;
  }

export interface ItemProps {
    itens: MenuItem[];
    burgerItens: MenuItem[];
  }

export const ToogleMenu: React.FC<ItemProps> = ({itens, burgerItens}) => {

  const {isLargeScreen} = useScreenSize(768)

    const[open, setOpen] = useState(false)

    return(
        <ToogleContainer>
            <Button open={open} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            <Menu className={open ? 'slideDown' : 'slideUp'}>
                {!isLargeScreen && itens.map((item, index) => (
                    <li key={index}><a href={item.href} target="_parent">{item.text}</a></li>
                ))}
                {burgerItens.map((item, index) => (
                    <li key={index}><a href={item.href} target="_parent">{item.text}</a></li>
                ))}
            </Menu>
        </ToogleContainer>
    )
}

type ButtonProps = {
    open: boolean;
  };

  const ToogleContainer = styled.div`
    @media(min-width:768px){
      position:relative;
    }
`;

  const Button = styled.div<ButtonProps>`
  width: 2.3rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position:absolute;
  right:20px;
  z-index:99;

  span {
    width: 100%;
    height: 2px;
    display: block;
    background-color: var(--text-white);
    transition: transform 0.3s, opacity 0.3s;
  }

  span:first-child {
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    margin-top:${(props) => (props.open ? '15px' : '')};
  }

  span:nth-child(2) {
    opacity: ${(props) => (props.open ? '0' : '1')};
  }

  span:last-child {
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    margin-bottom:${(props) => (props.open ? '15px' : '')};
  }

  @media(min-width:768px){
    position: static;
    margin:${(props) => (props.open ? '5px 10px 0' : '10px 10px 0')};
    width: 2rem;
    height: ${(props) => (props.open ? '2rem' : '1.5rem')};
  }
`;

const Menu = styled.div`
  height: 100vh;
  background-color: var(--background-primary);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:20px;

  &.slideDown {
    transform: translateY(0);
  }

  &.slideUp {
    transform: translateY(-100%);
  }

  li {
    list-style:none;
    color:var(--text-white);
    font-size:1.4rem;
    font-weight:300;
    cursor:pointer;
  }

  @media(min-width:768px){
    height: 200px;
    width:200px;
    position: fixed;
    top: 71px;
    margin-left:-140px;
    left:auto;
    right:auto;
    box-shadow:0 0 5px rgba(0,0,0,0.5);

    &.slideUp {
      transform: translateY(-140%);
    }

    align-items:flex-end;

    li {
      list-style:none;
      color:var(--text-white);
      font-size:1rem;
      font-weight:300;
      cursor:pointer;
      padding:0 20px 0; 
    }
  }
`;