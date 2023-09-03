"use client"

import styled from 'styled-components';

interface ItemProps {
    href?: string;
    text?: string;
}

export const ItemMenu: React.FC<ItemProps> = ({href, text}) => {
    return(
        <Link href={href}>{text}</Link>
    )
}

const Link = styled.a`
  color:var(--text-white);
  text-transform:uppercase;
  font-size:0.70rem;
  cursor:pointer;
  font-weight:300;
  position:relative;
  text-align:center;
  font-family: var(--font-secondary);
  letter-spacing:1.15px;

  &::after {
    content:'';
    width:0%;
    height:1px;
    background-color:#fff;
    position:absolute;
    bottom:-5px;
    left:0px;
    transition:0.3s;
  }

  &:hover{
    font-weight:500;
    
    &::after {
        width:100%;
    }
  }
`;