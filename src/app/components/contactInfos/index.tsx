import React from 'react';
import styled from 'styled-components';

interface ContactInfosProps {
    local?:any;
    phone?:any;
    hour?:any;
    email?:any;
}

export const ContactInfos: React.FC<ContactInfosProps> = ({ local, phone, hour, email }) => {

    return (
       <>
        <InfoContactContainer>
            <InfoTitle>
                <h5>{local.title}</h5>
            </InfoTitle>
            <InfoContent>
                <p>{local.text}</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>{hour.title}</h5>
            </InfoTitle>
            <InfoContent>
                <p>{hour.text}</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>{phone.title}</h5>
            </InfoTitle>
            <InfoContent>
                <p>{phone.text}</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>{email.title}</h5>
            </InfoTitle>
            <InfoContent>
                <p>{email.text}</p>
            </InfoContent>
        </InfoContactContainer>
       </>
    )
}

const InfoContactContainer = styled.div`
    padding:5px;
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:10px 0 30px;

    @media(max-width:768px){
        text-align:center;
        gap:10px;
        margin:0 0 20px ;
    }
`;

const InfoTitle = styled.div`
    h5{
        color:var(--text-secondary-variation);
        font-size:var(--mini-text-size);
        text-transform:uppercase;
        font-weight:var(--desktop-text-weight);
    }
`;

const InfoContent = styled.div`
    p{
        color:var(--text-secondary);
        font-size:var(--desktop-text-size);
        font-weight:var(--desktop-text-size);
        white-space: pre-line;
    }

    @media(max-width:768px){
        p{
            font-size:var(--mobile-text-size);
            font-weight:var(--mobile-text-weight);
        }
    }
    
`;
