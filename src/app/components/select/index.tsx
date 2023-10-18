import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: any;
  onChange: (selectedValue: string) => void;
  clearFilter:number;
  label:string;
}

export const Select: React.FC<SelectProps> = ({ label, options, clearFilter, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setSelectedValue('')
  }, [clearFilter, options])

  return (
    <ContainerSelect><StyledSelect value={selectedValue} onChange={handleSelectChange}>
      <option value='' disabled>{label}</option>
      {options && options.map((option : any, index : number) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </StyledSelect></ContainerSelect>
  );
};

const ContainerSelect = styled.div`
  border: solid 1px var(--background-primary);
  background-color: var(--background-secondary);
  padding-right:5px;
`;

const StyledSelect = styled.select`
  width:100%;
  height: 48px;
  border:none;
  background-color: var(--background-secondary);
  color:var(--text-primary);
  padding: 0 10px;
  text-transform: uppercase;
  font-size:var(--labels-size);
  font-weight:var(--labels-weight);

  option {
    height:30px;
    color:var(--text-secondary);
  }

    &:focus {
    outline: none;
  }
`;