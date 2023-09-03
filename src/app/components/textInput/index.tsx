import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  icon?: React.ReactNode;
  onChange?: (textValue: string) => void;
}

export const TextInput: React.FC<InputProps> = ({ placeholder, icon, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };


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
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
      <IconContainer isFocused={isFocused}>
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

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div<{ isFocused: boolean }>`
    margin-right: 0px;
    transition: opacity 0.3s ease-in-out;

    opacity: ${(props) => (props.isFocused ? '0' : '1')};
`;