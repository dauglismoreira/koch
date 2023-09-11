import styled from 'styled-components';
import { Container } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';

const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth', // Rola suavemente
        });
    }
};

export const OpportunityMenuSection = () => {
    const isLargeScreen = useScreenSize(768);

    return (
        <TopMenu>
            <Container>
                <TopMenuContainer>
                    <MenuItem onClick={() => scrollToSection('sobre')}>Sobre</MenuItem>
                    <MenuItem onClick={() => scrollToSection('imagens')}>Imagens</MenuItem>
                    <MenuItem className="last" onClick={() => scrollToSection('localizacao')}>Localização</MenuItem>
                </TopMenuContainer>
            </Container>
        </TopMenu>
    )
}


const TopMenu = styled.div`
    border-bottom:solid 1px var(--border-grey);
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