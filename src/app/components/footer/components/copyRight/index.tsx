"use client"

import styled from 'styled-components';

interface ItemProps {
    text?: string;
}

export const CopyRight: React.FC<ItemProps> = ({text}) => {

    return(
        <Copy>{text}</Copy>
    )
}

const Copy = styled.div`
    font-size:0.8rem;
    font-weight:300;
    color:var(--text-white);
`;