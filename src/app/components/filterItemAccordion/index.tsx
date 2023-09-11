import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FilterItemProps {
    label: string;
    options: { label: string; value: string }[];
  }
  
  const FilterItem: React.FC<FilterItemProps> = ({ label, options }) => {
  const [isBodyVisible, setIsBodyVisible] = useState(true);

  const toggleBodyVisibility = () => {
    setIsBodyVisible(!isBodyVisible);
  };

  return (
    <FilterItemContainer>
      <Item onClick={toggleBodyVisibility}>
        {label}
        <MdOutlineKeyboardArrowDown color="var(--text-primary)" size="1.5rem" />
      </Item>
      <Body className={isBodyVisible ? 'visible' : 'hidden'}>
        {options.map((item, index) => (
          index === 0 ? null : <li key={index}>{item.label}</li>
        ))}
      </Body>
    </FilterItemContainer>
  );
};

export default FilterItem;

const FilterItemContainer = styled.div`
  // Adicione estilos para o container do FilterItem se necessário
`;

const Item = styled.div`
  color: var(--text-secondary);
  margin: 20px 0;
  text-transform: uppercase;
  font-size: var(--labels-size);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const Body = styled.div`
  display: none;

  &.visible {
    display: block;
  }
  
  li {
    list-style: none;
    color: var(--text-primary);
    text-transform: uppercase;
    padding: 7px 0;
    font-size: var(--labels-size);
    font-weight: var(--labels-weight);
  }
`;