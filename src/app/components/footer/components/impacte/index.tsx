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
    font-size:0.8rem;
    font-weight:300;
    color:var(--text-white);
    text-align:right;

    @media(max-width:768px){
        text-align:left;
        font-size:0.9rem;
        margin-top:20px;
    }
`;