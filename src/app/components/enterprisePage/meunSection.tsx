import styled from 'styled-components';
import { Container } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';

export const EnterMenuSection = () => {
    const isLargeScreen = useScreenSize(768);

    return (
        <TopMenu>
            <Container>
                <TopMenuContainer>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Imagens</MenuItem>
                    {isLargeScreen.isLargeScreen && <MenuItem>Plantas</MenuItem>}
                    <MenuItem className={!isLargeScreen.isLargeScreen ? "last" : ''}>Localização</MenuItem>
                    {isLargeScreen.isLargeScreen && <MenuItem className="last">Acompanhamento de obra</MenuItem>}
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
`;