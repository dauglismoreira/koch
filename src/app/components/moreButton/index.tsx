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
    color:var(--text-primary);
    text-transform:uppercase;
    max-width:300px;
    font-size: var(--buttons-size);
    margin:0;
    line-height:1.4;
    font-weight:var(--buttons-weight);
    height:100%;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    cursor:pointer;

    a {
        display:inline-flex;
        width:auto;
        position:relative;
    }

      a::after {
        content:'';
        width:0%;
        height:1px;
        background-color:var(--text-primary);
        position:absolute;
        bottom:-5px;
        right:0px;
        transition:0.3s;
    }

    a:hover{    
        &::after {
            width:100%;
        }
    }

    @media(max-width:768px){
        justify-content:center;
        max-width:100%;
        margin-top:-30px;
    }
`;