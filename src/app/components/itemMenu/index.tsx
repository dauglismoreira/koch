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
  font-size:var(--buttons-size);
  cursor:pointer;
  font-weight:var(--buttons-weight);
  position:relative;
  text-align:center;
  letter-spacing:1.15px;

  &::after {
    content:'';
    width:0%;
    height:1px;
    background-color:var(--text-white);
    position:absolute;
    bottom:-5px;
    left:0px;
    transition:0.3s;
  }

  &:hover{    
    &::after {
        width:100%;
    }
  }

  @media(max-width:768px){
    font-size:var(--mini-text-size);
  }
`;