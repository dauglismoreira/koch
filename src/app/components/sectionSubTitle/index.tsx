import styled from 'styled-components';

interface SectionSubTitleProps {
    text?:string;
    color?:string;
}

export const SectionSubTitle: React.FC<SectionSubTitleProps> = ({ text, color }) => {

    return (

        <SubTitle
            color={color || "var(--text-white)"}
        >{text}</SubTitle>

    );
}

const SubTitle = styled.h5<{color: string}>`
    font-family: var(--font-secondary);
    color:${props => props.color};
    text-transform:uppercase;
    max-width:300px;
    font-size: 12px;
    margin:0;
    letter-spacing:1.5px;
    line-height:1.4;
    font-weight:300;
    white-space:pre-line;

    @media(max-width:768px){
        text-align:center;
        max-width:100%;
        font-size: 11px;
        white-space:nowrap;
    }
`;