import React, { useState, useRef, useEffect } from 'react';
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
    const bodyRef = useRef<HTMLDivElement>(null); 
    const [heightContent, setHeightContent] = useState(0); 

    useEffect(() => {
      if (bodyRef.current) {
          setHeightContent(bodyRef.current.offsetHeight);
      }
   }, []);

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
                    height={heightContent}
                    activeindex={activeIndex}
                    onClick={() => handleItemClick(index)}
                >
                    <Title>
                        <span>{item.title}</span>
                        {activeIndex !== index ? <MdOutlineAdd /> : <MdOutlineRemove />}
                    </Title>
                    <Body
                        active={activeIndex === index}
                        ref={bodyRef}
                        height={heightContent}
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

const Item = styled.div<{active: boolean; activeindex: number; height: any}>`
  height: 100px;
  height:${props => props.activeindex !== -1 ? (props.active ? (props.height + 120) : 50) : 100}px;
  min-height:${props => props.activeindex !== -1 ? (props.active ? 200 : 50) : 100}px;
  border-bottom:solid 1px rgba(255,255,255,0.3);
  display:flex;
  flex-direction:column;
  justify-content:center;
  transition: 0.5s ease-in-out;
  position:relative;

    &:first-child{
        border-top:solid 1px rgba(255,255,255,0.3);
    }

    @media(max-width:768px){
      padding:20px 10px;
      height:${props => props.activeindex !== -1 ? (props.active ? (props.height + 80) : `50px`) : `80px`};
    }
    
`;

const Title = styled.div`
  font-size:var(--labels-size);
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

  span {
    position:relative;
  }

  & span::after {
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
      & span::after {
        width:100%;
      }
  }
`;

const Body = styled.div<{active: boolean; height: any}>`
  margin:0;
  font-size:var(--desktop-size);
  line-height:1.8;
  color:var(--text-white);
  padding:0 90px;
  font-weight:var(--desktop-weight);
  max-height:${props => props.height > 0 ? (props.active ? '500px' : '0px') : 'auto'};
  transition: ${props => props.active ? '0.9s' : '0.5s'} ease-in-out;
  overflow:${props => props.height > 0 ? 'hidden' : 'unset'};
  opacity:${props => props.height > 0 ? 1 : 0};

  @media(max-width:768px){
    padding:0px 20px;
    font-size:var(--mobile-size);
    font-weight:var(--mobile-weight);
    max-height:${props => props.height > 0 ? (props.active ? '600px' : '0px') : 'auto'};
  }
`;