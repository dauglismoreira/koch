import styled from 'styled-components';

interface SectionBodyTexProps {
    text?:string;
    color?:string;
}

export const SectionBodyText: React.FC<SectionBodyTexProps> = ({ text, color }) => {

    return (
        <Text
            color={color || "var(--text-white)"}
        >
            {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </Text>
    );
}

const Text = styled.div<{color: string}>`
    h3 {
        color:${props => props.color};
        font-family: var(--font-primary);
        font-size:58px;
        text-transform:uppercase;
        margin-bottom:20px;
    }

    p {
        color:${props => props.color};
        line-height:1.4;
        font-weight:300;
        font-size:16px;
        margin-top:20px;

        @media(max-width:768px){
            padding:0 10px 10px;
        }
    }
`;