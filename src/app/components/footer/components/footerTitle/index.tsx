"use client"

import styled from 'styled-components';

interface ItemProps {
    text?: string;
}

export const FooterTitle: React.FC<ItemProps> = ({text}) => {

    return(
        <Title>{text}</Title>
    )
}

const Title = styled.div`
    font-size:3.8rem;
    color:var(--text-white);
    font-family: 'Libre Baskerville', serif;
    white-space: pre-line;
    line-height:1;
    font-weight:600;
    text-transform:uppercase;
`;