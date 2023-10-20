import { Baskerville } from '@/app/fonts';
import getStorageFile from '@/helpers/getStorageFile';
import styled from 'styled-components';

export interface CardProps {
    file?: any;
    name?: string;
    creci?: string;
    email?: string;
    telephone?: any;
    whatsapp?: any;
}

interface CardPropsData {
    data:CardProps
}

export const BrokerCard: React.FC<CardPropsData> = ({ 
    data
 }) => {

    // const formatPhoneNumber = (phoneNumber: string) => {
    //     const part1 = phoneNumber.substring(0, 2);
    //     const part2 = phoneNumber.substring(2, 7);
    //     const part3 = phoneNumber.substring(7, 11);
    //     return (
    //       <div>
    //         <span>({part1}) </span>
    //         {part2}-{part3}
    //       </div>
    //     );
    // };
    
    return (
        <Card>
            <Cover
                image={data && data.file?.path ? getStorageFile(data.file?.path) : './images/avatar.avif'}
            ></Cover>
            <Content>
                <Info>
                    <Name className={`${Baskerville.className}`}><h3>{data.name}</h3></Name>
                    <Phone>{data.telephone}</Phone>
                </Info>
                <ContainerButtons>
                    <Button><a href={`mailto:` + data?.email} target="_blank">Email</a></Button>
                    <Button><a href={`https://api.whatsapp.com/send?phone=` + data?.whatsapp?.replace(/\D/g, '')} target="_blank">Whatsapp</a></Button>
                    <Button><a  href={`tel:${data?.telephone?.replace(/\D/g, '')}`} target="_blank">Ligue agora</a></Button>
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
        font-size:var(--desktop-text-size);
        text-transform:uppercase;
        letter-spacing:0px;
        font-weight:var(--medium-title-weight);
        padding-top:10px;
        max-width:90%;
        margin:auto;
        text-align:center;

        @media(max-width:768px){
            font-size:var(--mobile-text-size);
        }
    }
`;

const Phone = styled.div`
    color:var(--text-secondary);
    font-size:var(--desktop-text-size);
    margin-top:5px;

    @media(max-width:768px){
        font-size:var(--mobile-text-size);
    }
`;

const Button = styled.div`
    background-color:transparent;
    color:var(--text-primary);
    border:solid 1px var(--background-primary);
    text-transform:uppercase;
    border-radius:5px;
    padding:8px 15px;
    font-size:var(--buttons-size);
    cursor:pointer;
    font-weight:var(--buttons-weight);
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