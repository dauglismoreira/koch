import styled from 'styled-components';

export interface ButtonsProps {
    label?:string;
    link?:string;
    extern?:number;
}

interface ContainerButtonsProps {
    buttonsList?:ButtonsProps[];
    color?:string;
    background?:string;
}

export const ContainerButtons: React.FC<ContainerButtonsProps> = ({ buttonsList, color, background }) => {

    return (
        <Container>
            {buttonsList && buttonsList.map((button, index) => (
                <Button
                    key={index}
                    href={button.extern ? button.link : `./../${button.link}`}
                    target={button.extern ? '_blank' : '_parent'}
                    color={color || "var(--text-primary)"}
                    background={background || "var(--text-white)"}
                >
                {button.label}</Button>
            ))}
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    margin:20px 0 0;

    @media(max-width:640px){
        flex-direction:column;
        text-align:center;
        padding:0 10px;
    }
`;

const Button = styled.a<{color: string; background: string}>`
    background-color:transparent;
    color:${props => props.background};
    border:solid 1px ${props => props.background};
    text-transform:uppercase;
    border-radius:5px;
    padding:0 15px;
    font-size:var(--buttons-size);
    cursor:pointer;
    font-weight:var(--buttons-weight);
    transition: 0.3s ease-in-out;
    height:40px;
    align-items:center;
    justify-content:center;
    display:flex;

    &:hover {
        background-color:${props => props.background};
        color:${props => props.color};
    }

    @media(max-width:640px){
        padding:0  15px;
        height:40px;
    }
`;