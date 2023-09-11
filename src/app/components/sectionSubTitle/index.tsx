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
    color:${props => props.color};
    text-transform:uppercase;
    max-width:300px;
    font-size: var(--small-text-size);
    font-weight: var(--small-text-weight);
    margin:0;
    letter-spacing:1.5px;
    line-height:1.4;
    white-space:pre-line;

    @media(max-width:768px){
        text-align:center;
        max-width:100%;
        white-space:nowrap;
        margin-bottom:8px;
    }
`;