import styled from 'styled-components';

interface SectionTitleProps {
    text?:string;
    color?:string;
    size?:string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, size, color }) => {

    return (
        <Title
            color={color || "var(--text-white)"}
            size={size || '58px'}
        >{text}</Title>
    );
}

const Title = styled.h1<{color: string; size: string}>`
    font-family: var(--font-primary);
    color:${props => props.color};
    font-weight:800;
    text-transform:uppercase;
    letter-spacing: 0px;
    text-align: left;
    font: normal normal bold Baskerville;
    font-size: ${props => props.size};
    margin:0;
    white-space:pre-line;

    @media(max-width:768px){
        text-align:center;
        font-size: 22px;
        white-space:normal;
        margin:0px 0 20px;
    }
`;
