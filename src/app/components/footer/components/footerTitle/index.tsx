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
    font-size:4rem;
    color:var(--text-white);
`;