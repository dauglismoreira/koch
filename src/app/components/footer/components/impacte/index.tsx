"use client"

import styled from 'styled-components';
import {ReactNode} from "react";

interface ItemProps {
    text?: string;
    children: ReactNode
}

export const ImpacteText: React.FC<ItemProps> = ({text, children}) => {

    return(
        <Impacte>{text} {children}</Impacte>
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