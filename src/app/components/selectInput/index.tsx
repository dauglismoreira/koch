import React from 'react';
import styled from 'styled-components';

export const SelectInput: React.FC<{
  name: string;
  placeholder: string;
  value: string;
  color: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: { label: string; value: string }[];
}> = ({ name, color = 'var(--text-white)', placeholder, value, onChange, options }) => {
    
  return (
    <Select
      name={name}
      value={value}
      onChange={onChange}
      color={color}
    >
      <option value="">{placeholder}</option>
      {options && options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select<{color: string}>`
    background-color:transparent;
    border:solid 1px ${props => props.color};
    width:100%;
    height:35px;
    color:${props => props.color};
    padding:0 10px;
    font-size:var(--labels-size);
    font-weight:var(--labels-weight);
    text-transform:uppercase;

    option {
      color:var(--text-secondary-variation);
    }
`;