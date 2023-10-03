import styled from 'styled-components';
import { Container } from "../grid";

const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth',
        });
    }
};

export const EnterMenuSection = () => {

    return (
        <TopMenu>
            <Container>
                <TopMenuContainer>
                    <MenuItem onClick={() => scrollToSection('sobre')}>Sobre</MenuItem>
                    <MenuItem onClick={() => scrollToSection('imagens')}>Imagens</MenuItem>
                    <MenuItem onClick={() => scrollToSection('plantas')}>Plantas</MenuItem>
                    <MenuItem onClick={() => scrollToSection('localizacao')}>Localização</MenuItem>
                    <MenuItem className="last"  onClick={() => scrollToSection('obra')}>Acompanhamento de obra</MenuItem>
                </TopMenuContainer>
            </Container>
        </TopMenu>
    )
}


const TopMenu = styled.div`
    border-bottom:solid 1px var(--border-grey);
    position:fixed;
    background-color:var(--background-secondary);
    width:100%;
    top:70px;
    z-index:998;
`;

const TopMenuContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;

    @media(max-width:768px){
        overflow:auto;
        height:40px;
    }
`;

const MenuItem = styled.div`
    border-left:solid 1px var(--border-grey);
    padding:8px 15px;
    cursor:pointer;
    color:var(--text-primary);
    text-transform:uppercase;
    font-size:14px;
    font-weight:500;
    transition:0.2s;

    &.last{
        border-right:solid 1px var(--border-grey);
    }

    &:hover {
        background-color:var(--background-primary);
        color:var(--text-white);
    }

    @media(max-width:768px){
        white-space:nowrap;
    }
`;