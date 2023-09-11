import styled from 'styled-components';

interface SectionBodyTexProps {
    text?:string;
    color?:string;
}

export const SectionBodyText: React.FC<SectionBodyTexProps> = ({ text, color }) => {

    return (
        <TextContent
            color={color || "var(--text-white)"}
        >
            {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </TextContent>
    );
}

const TextContent = styled.div<{color: string}>`

    h3 {
        color:${props => props.color};
        font-size: var(--big-title-size);
        text-transform:uppercase;
        margin-bottom:20px;
    }

    p {
        color:${props => props.color};
        line-height:1.4;
        font-weight:var(--desktop-text-weight);
        font-size: var(--desktop-text-size);
        margin-top:20px;

        @media(max-width:768px){
            padding:0 10px 10px;
            line-height:1.6;
            font-weight:var(--mobile-text-weight);
            font-size: var(--mobile-text-size);
        }
    }
    
    ul {
        margin:20px 0;
    }

    li {
        color:${props => props.color};
        margin:10px 0;
        list-style:none;
        font-size: var(--desktop-text-size);
        font-weight: var(--desktop-text-weight);
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:8px;

        @media(max-width:768px){
            font-weight:var(--mobile-text-weight);
            font-size: var(--mobile-text-size);
        }

        &::before{
            content:'—';
            display:block;
        }
    }
`;