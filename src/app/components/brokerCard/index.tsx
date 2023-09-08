import styled from 'styled-components';

export interface CardProps {
    photo?: string;
    name?: string;
    creci?: string;
    email?: string;
    phone?: any;
}

export const BrokerCard: React.FC<{ data: CardProps }> = ({ data }) => {
    const { photo, name, creci, phone, email } = data;

    const formatPhoneNumber = (phoneNumber: string) => {
        const part1 = phoneNumber.substring(0, 2);
        const part2 = phoneNumber.substring(2, 7);
        const part3 = phoneNumber.substring(7, 11);
        return (
          <div>
            <span>({part1}) </span>
            {part2}-{part3}
          </div>
        );
    };
    
    return (
        <Card>
            <Cover
                image={photo || ''}
            ></Cover>
            <Content>
                <Info>
                    <Name><h3>{name}</h3></Name>
                    <Creci>CRECI - {creci}</Creci>
                    <Phone>{formatPhoneNumber(phone)}</Phone>
                </Info>
                <ContainerButtons>
                    <Button><a href={`mailto:` + email} target="_blank">Email</a></Button>
                    <Button><a href={`https://api.whatsapp.com/send?phone=55` + phone} target="_blank">Whatsapp</a></Button>
                    <Button>Ligue agora</Button>
                </ContainerButtons>
            </Content>
        </Card>
    );
}

const Cover = styled.div<{image : string}>`
    position: relative;
    height: 50%;
    transition: 0.3s ease-in-out;
    background: transparent;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${props => props.image}');
        background-size: cover;
        background-position: center center;
        transform-origin: center center;
        z-index: 0;
        transition: inherit;
    }
`;

const Content = styled.div`
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:0;
`;

const Info = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ContainerButtons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;

    @media(max-width:640px){
        width:100%;
    }
`;

const Name = styled.div`
    h3 {
        color:var(--text-primary);
        font-family: var(--font-primary);
        font-size:1.2rem;
        text-transform:uppercase;
        letter-spacing:0px;
        font-weight:900;
        padding-top:10px;

        @media(max-width:768px){
            font-size:1.2rem;
        }
    }
`;

const Creci = styled.div`
    color:var(--text-secondary);
    font-size:12px;
    margin-top:8px;
`;

const Phone = styled.div`
    color:var(--text-secondary);
    font-size:15px;
    margin-top:15px;
`;

const Button = styled.a`
    background-color:transparent;
    color:var(--text-primary);
    border:solid 1px var(--background-primary);
    text-transform:uppercase;
    border-radius:5px;
    padding:8px 15px;
    font-size:12px;
    cursor:pointer;
    font-weight:500;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color:var(--background-primary);
        color:var(--text-white);
    }

    @media(max-width:640px){
        padding:12px 15px;
        width:100%;
        text-align:center;
    }
`;

const Card = styled.div`
    width:100%;
    border:solid 1px var(--border-grey);
    padding:10px;
    height:560px;
    transition:0.3s ease-in-out;

    @media(max-width:768px){
        height:593px;
    }
`;