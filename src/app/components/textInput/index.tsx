import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  icon?: React.ReactNode;
  onChange?: (textValue: string) => void;
  open:boolean;
  param:string;
  clearFilter:number;
}

export const TextInput: React.FC<InputProps> = ({ placeholder, clearFilter, icon, onChange, open, param }) => {
    const [inputValue, setInputValue] = useState('');
  

    useEffect(() => {
      setInputValue('')
    }, [clearFilter])

    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const valueFromParam = queryParams.get(param);

      const fakeEvent = {
        target: {
          value: valueFromParam || '',
        },
      } as React.ChangeEvent<HTMLInputElement>;

      handleInputChange(fakeEvent)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param, open]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (onChange) {
          onChange(newValue);
        }
      };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={inputValue}
      />
      <IconContainer>
        {icon}
    </IconContainer>
    </InputContainer>
  );
};


const InputContainer = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px var(--background-primary);
  background-color: var(--background-secondary);
  padding: 0 10px;
  height: 48px;

  transition: border-color 0.3s ease-in-out;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 0;
  height: 100%;
  width:100%;
  font-size:var(--labels-size);
  font-weight:var(--labels-weight);

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
    margin-right: 0px;
    transition: opacity 0.3s ease-in-out;

`;