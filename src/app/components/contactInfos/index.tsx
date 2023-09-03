import styled from 'styled-components';

interface ContactInfosProps {
    phone?:string;
    street?:string;
    city?:string;
    email?:string;
}

export const ContactInfos: React.FC<ContactInfosProps> = ({ phone, street, city, email }) => {

    return (
       <>
        <InfoContactContainer>
            <InfoTitle>
                <h5>Endereço</h5>
            </InfoTitle>
            <InfoContent>
                <p>{street}</p>
                <p>{city}}</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>Horário de atendimento</h5>
            </InfoTitle>
            <InfoContent>
                <p>Segunda a sábado das 9h às 19h</p>
                <p>Domingos e feriados das 10h às 18h</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>Telefone</h5>
            </InfoTitle>
            <InfoContent>
                <p>{phone}</p>
            </InfoContent>
        </InfoContactContainer>
        <InfoContactContainer>
            <InfoTitle>
                <h5>Email</h5>
            </InfoTitle>
            <InfoContent>
                <p>{email}</p>
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
        color:var(--text-secondary);
        font-size:11px;
        text-transform:uppercase;
        font-weight:400;
    }
`;

const InfoContent = styled.div`
    p{
        color:var(--text-secondary);
        font-size:13px;
        font-weight:400;
    }
`;
