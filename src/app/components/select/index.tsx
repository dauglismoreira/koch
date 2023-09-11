import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: { label: string; value: string }[];
  onChange: (selectedValue: string) => void;
  clearFilter:number;
}

export const Select: React.FC<SelectProps> = ({ options, clearFilter, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setSelectedValue(options[0].value)
  }, [clearFilter, options])

  return (
    <ContainerSelect><StyledSelect value={selectedValue} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={index === 0}>
          {option.label}
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