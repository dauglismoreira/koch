import { Baskerville } from '@/app/fonts';
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
            size={size || 'var(--big-title-size)'}
            className={`${Baskerville.className}`}
        >{text}</Title>
    );
}

const Title = styled.h1<{color: string; size: string}>`
    color:${props => props.color};
    font-weight: var(--big-title-weight);
    text-transform:uppercase;
    letter-spacing: 0px;
    text-align: left;
    font-size: ${props => props.size};
    margin:0;
    white-space:pre-line;

    @media(max-width:768px){
        text-align:center;
        white-space:normal;
        margin:0px 0 28px;
        font-size: var(--small-title-size);
    }
`;
