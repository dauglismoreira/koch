"use client"

import styled from 'styled-components';

interface ItemProps {
    text?: string;
}

export const ImpacteText: React.FC<ItemProps> = ({text}) => {

    return(
        <Impacte>{text}</Impacte>
    )
}

const Impacte = styled.div`
    font-size:var(--small-text-size);
    font-weight:var(--small-text-weight);
    color:var(--text-white);
    text-align:right;

    @media(max-width:768px){
        text-align:left;
        margin-top:20px;
    }
`;