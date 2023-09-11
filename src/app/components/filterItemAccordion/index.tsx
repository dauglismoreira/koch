import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface FilterItemProps {
    label: string;
    param: string;
    options: { label: string; value: string }[];
    onItemClick: (value: string) => void;
    open: boolean;
  }


  
  const FilterItem: React.FC<FilterItemProps> = ({ label, options, onItemClick, param, open }) => {
  const [isBodyVisible, setIsBodyVisible] = useState(true);
  const [paramValue, setParamValue] = useState<string | null>(null);

  const toggleBodyVisibility = () => {
    setIsBodyVisible(!isBodyVisible);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const valueFromParam = queryParams.get(param);
    setParamValue(valueFromParam);
  }, [param, open]);

  return (
    <FilterItemContainer>
      <Item onClick={toggleBodyVisibility}>
        {label}
        <MdOutlineKeyboardArrowDown color="var(--text-primary)" size="1.5rem" />
      </Item>
      <Body className={isBodyVisible ? 'visible' : 'hidden'}>
        {options.map((item, index) => (
          index === 0 ? null :
            <li
            key={index}
            onClick={() => {
              onItemClick(item.value)
              setParamValue(item.value)
            }}
            className={item.value === paramValue ? 'highlighted' : ''}
          >{item.label}</li>
        ))}
      </Body>
    </FilterItemContainer>
  );
};

export default FilterItem;

const FilterItemContainer = styled.div`
  
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

  .highlighted {
    background-color:var(--background-secondary-variation);
    margin:0 -10px;
    width:calc(100% + 20px);
    padding: 7px 10px;
    color:var(--text-white);
  }
`;