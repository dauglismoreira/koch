"use client"

import styled from 'styled-components';

interface ItemProps {
    text?: string;
}

export const CopyRight: React.FC<ItemProps> = ({text}) => {

    return(
        <Copy>{text?.replace(' - ', '\n')}</Copy>
    )
}

const Copy = styled.div`
    font-size:var(--small-text-size);
    font-weight:var(--small-text-weight);
    color:var(--text-white);

    @media(max-width:768px){
        padding-right:20px;
        line-height:1.6;
        margin-top:80px;
    }
`;