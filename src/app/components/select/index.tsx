import React, { useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: { label: string; value: string }[];
  onChange: (selectedValue: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <StyledSelect value={selectedValue} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={index === 0}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width:100%;
  height: 48px;
  border: solid 1px var(--background-primary);
  background-color: var(--background-secondary);
  color:var(--text-primary);
  padding: 0 10px;
  text-transform: uppercase;

  option {
    height:30px;
    color:var(--text-secondary);
  }
`;