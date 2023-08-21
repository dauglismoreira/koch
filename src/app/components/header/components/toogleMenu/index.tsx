"use client"

import styled from 'styled-components';
import {useState} from 'react';

interface MenuItem {
    text: string;
    href?: string;
  }

interface ItemProps {
    itens: MenuItem[];
  }

export const ToogleMenu: React.FC<ItemProps> = ({itens}) => {

    const[open, setOpen] = useState(false)

    return(
        <>
            <Button open={open} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            <Menu className={open ? 'slideDown' : 'slideUp'}>
                {itens.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </Menu>
        </>
    )
}

type ButtonProps = {
    open: boolean;
  };

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
    font-size:1.6rem;
    font-weight:300;
    cursor:pointer;
  }
`;