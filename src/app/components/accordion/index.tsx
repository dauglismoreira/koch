import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";

export interface AccordionItemProps {
    title?:string;
    description?:string;
}

interface AccordionProps {
    data?:AccordionItemProps[];
}

export const Accordion: React.FC<AccordionProps> = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const handleItemClick = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
    };

    return (
        <AccordionContainer>
            {data && data.map((item, index) => (
                <Item
                    key={index}
                    active={activeIndex === index}
                    activeIndex={activeIndex}
                    onClick={() => handleItemClick(index)}
                >
                    <Title>
                        {item.title}
                        {activeIndex !== index ? <MdOutlineAdd /> : <MdOutlineRemove />}
                    </Title>
                    <Body
                        active={activeIndex === index}
                    >{item.description}</Body>
                </Item>
            ))}
        </AccordionContainer>
    );
}

const AccordionContainer = styled.div`
    margin:50px 0 0;

    @media(max-width:768px){
      margin:0 0 30px;
    }
`;

const Item = styled.div<{active: boolean; activeIndex: number}>`
  height: 100px;
  height:${props => props.activeIndex !== -1 ? (props.active ? 200 : 50) : 100}px;
  border-bottom:solid 1px rgba(255,255,255,0.3);
  display:flex;
  flex-direction:column;
  justify-content:center;
  transition: 0.5s ease-in-out;

    &:first-child{
        border-top:solid 1px rgba(255,255,255,0.3);
    }

    @media(max-width:768px){
      padding:0 10px;
      height:${props => props.activeIndex !== -1 ? (props.active ? 200 : 50) : 80}px;
    }
    
`;

const Title = styled.div`
  font-size:14px;
  text-transform:uppercase;
  color:var(--text-white);
  padding:5px 0;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;

  .icon{
    padding-top:5px;
    transition:0.6s;
  }
`;

const Body = styled.div<{active: boolean}>`
  margin:0;
  font-size:14px;
  line-height:1.8;
  color:var(--text-white);
  padding:0 90px;
  font-weight:200;
  height:${props => props.active ? '120' : '0'}px;
  transition: 0.5s ease-in-out;
  overflow:hidden;

  @media(max-width:768px){
    padding:0px 20px;
    height:${props => props.active ? '140' : '0'}px;
  }
`;