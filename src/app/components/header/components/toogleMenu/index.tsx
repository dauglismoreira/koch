import styled from 'styled-components';
import {useState, useEffect} from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import { Col } from '@/app/components/grid';

export interface MenuItem {
    text: string;
    href?: string;
  }

export interface ItemProps {
    itens: MenuItem[];
    burgerItens: MenuItem[];
    initial: MenuItem[];
    itemSocialList?: MenuItem[];
  }

export const ToogleMenu: React.FC<ItemProps> = ({itemSocialList, itens, burgerItens, initial}) => {

  const {isLargeScreen} = useScreenSize(992)

    const[open, setOpen] = useState(false)

    useEffect(() => {
      if (open && !isLargeScreen) {
        document.documentElement.classList.add('no-scroll');
      } else {
        document.documentElement.classList.remove('no-scroll');
      }
    }, [open]);

    return(
      <>
      <BgAnimation></BgAnimation>
        <ToogleContainer>
            <Button open={open} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            <Menu className={open ? 'slideDown' : 'slideUp'}>
                {initial.map((item, index) => (
                    <li key={index}><a href={item.href} target="_parent">{item.text}</a></li>
                ))}
                {!isLargeScreen && itens.map((item, index) => (
                    <li key={index}><a href={item.href} target="_parent">{item.text}</a></li>
                ))}
                {burgerItens.map((item, index) => (
                    <li key={index}><a href={item.href} target="_parent">{item.text}</a></li>
                ))}
              {!isLargeScreen &&
                  <SocialLinks>
                      {itemSocialList && itemSocialList.map((item, index) => (
                          <Link key={index}><a href={item.href} target="_blank">{item.text}</a></Link>
                      ))}
                  </SocialLinks>
              }
            </Menu>
        </ToogleContainer>
      </>
    )
}

type ButtonProps = {
    open: boolean;
  };

  const ToogleContainer = styled.div`
    @media(min-width:992px){
      position:relative;
      margin-top:-3px;
    }
`;

const BgAnimation = styled.div`
    position:absolute;
    top:0;
    width:100%;
    right:0;
    left:0;
    bottom:0;
    z-index:-1;
    background-color:var(--background-primary);
`;

  const Button = styled.div<ButtonProps>`
  width: 2.3rem;
  height: 2.3rem;
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
    margin-bottom:${(props) => (props.open ? '20px' : '')};
  }

  @media(min-width:992px){
    position: static;
    margin:${(props) => (props.open ? '10px 10px 0' : '10px 10px 0')};
    width: 2rem;
    height: ${(props) => (props.open ? '2rem' : '2rem')};

    span:last-child {
      margin-bottom:${(props) => (props.open ? '15px' : '')};
    }
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
  z-index:-2;

  &.slideDown {
    transform: translateY(0);
  }

  &.slideUp {
    transform: translateY(-100%);
  }

  li {
    list-style:none;
  }

  li a{
    color:var(--text-white);
    font-size:var(--small-title-size);
    font-weight:var(--buttons-weight);
    cursor:pointer;
    display:inline-flex;
    text-transform:uppercase;
    position:relative;
  }

  & li a::after {
    content:'';
    width:0%;
    height:1px;
    background-color:#fff;
    position:absolute;
    bottom:-5px;
    right:0;
    transition:0.3s;
  }

  & li a:hover{    
    &::after {
        width:100%;
    }
  }

  @media(min-width:992px){
    height: 240px;
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

    li a{
      list-style:none;
      color:var(--text-white);
      font-size:var(--buttons-size);
      font-weight:var(--buttons-weight);
      cursor:pointer;
      margin:0 20px 0; 
    }
  }
`;

const SocialLinks = styled.div`
    height:50px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:space-around;
    gap:20px;
    padding-bottom:50px;
    position:fixed;
    z-index:9999;
    bottom:60px;
    left:0;
    right:0;

    @media(max-width:768px){
        padding:70px 0 0;
    }
`;

const Link = styled.div`
    color:var(--text-white);
    text-transform:uppercase;
    font-size:var(--buttons-size);
    font-weight:var(--buttons-weight);
    cursor:pointer;
    
    a {
        position:relative;
    }

    & a::after {
        content:'';
        width:0%;
        height:1px;
        background-color:#fff;
        position:absolute;
        bottom:-5px;
        left:0;
        transition:0.3s;
      }
    
      & a:hover{    
        &::after {
            width:100%;
        }
      }

      @media(max-width:768px){
        text-decoration:underline;
    }
`;