import styled from 'styled-components';

interface MoreButtonProps {
    cta?:string;
    link?:string;
}

export const MoreButton: React.FC<MoreButtonProps> = ({ cta, link }) => {
    
    return (
        <More><a href={`./../${link}`}>{cta}</a></More>
    );
}

const More = styled.div`
    font-family: var(--font-secondary);
    color:var(--text-primary);
    text-transform:uppercase;
    max-width:300px;
    font-size: 11px;
    margin:0;
    line-height:1.4;
    font-weight:700;
    height:100%;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    cursor:pointer;

    @media(max-width:768px){
        justify-content:center;
        max-width:100%;
        font-size: 13px;
        margin-top:-30px;
    }
`;