import React from 'react';
import styled from 'styled-components';

interface ControllersProps {
    images: string[];
    activeIndex: number;
    handleOptionClick: (index: number) => void;
}

export const SlideControllers: React.FC<ControllersProps> = ({ images, activeIndex, handleOptionClick }) => {
    return (
        <ControllersWrapper>
            {images.map((_, index) => (
                <Option
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    isActive={index === activeIndex}
                >
                    {index + 1}
                </Option>
            ))}
        </ControllersWrapper>
    );
}

const ControllersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Option = styled.div<{ isActive: boolean }>`
    font-size: var(--small-text-size);
    font-weight: var(--small-text-weight);
    padding: 0 10px;
    color: ${(props) => (props.isActive ? 'var(--text-primary)' : 'var(--text-secondary)')};
    font-weight: ${(props) => (props.isActive ? '700' : 'var(--small-text-weight)')};
    cursor: pointer;
    transition: color 0.5s ease-in-out;

    &:hover {
        color: var(--text-primary);
    }
`;