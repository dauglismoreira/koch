'use client'

import styled from 'styled-components';
import { Section } from "./components/grid";
import { Baskerville } from './fonts';
import SvgComponent from './components/SvgComponent';


const NotFound = () => {

    return (
        <NotFoundSectionContainer>
            <Section position='relative' className="section" background="var(--background-primary-variation)">
                <NotFoundContainer>
                    <h1 className={Baskerville.className}>404</h1>
                    <p>A página que você procurou não existe.</p>
                    <Button href="./../">Voltar para o início</Button>
                </NotFoundContainer>
                <SvgContainer>
                    <SvgComponent className="sv1" color="#182842" border="#182842"/>
                </SvgContainer>
            </Section>
        </NotFoundSectionContainer>
    )
}

const NotFoundSectionContainer = styled.div`
    .section{
        padding: 120px 0;

        @media(max-width:768px){
            padding: 140px 0 40px;
        }
    }
`;


const NotFoundContainer = styled.div`
    height:60vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h1{
        color:var(--text-white);
        font-weight:var(--big-title-weight);
        font-size:200px;
    }

    p {
        color:var(--text-white);
        font-weight:var(--small-title-weight);
        font-size:18px;
        margin-top:-18px;
    }

    @media(max-width:768px){
        height:65vh;
    }

    h1{
        color:var(--text-white);
        font-weight:var(--big-title-weight);
        font-size:130px;
    }

    p {
        color:var(--text-white);
        font-weight:var(--small-title-weight);
        font-size:18px;
        margin-top:-18px;
    }
`;

const Button = styled.a`
    border:solid 1px var(--text-white);
    border-radius:5px;
    height:40px;
    padding:0 15px;
    font-size:var(--buttons-size);
    font-weight:var(--buttons-weight);
    display:flex;
    align-items:center;
    text-transform:uppercase;
    color:var(--text-white);
    margin-top:60px;
`;

const SvgContainer = styled.div`
    position:absolute;
    top:-300px;
    bottom:0;
    right:0;
    z-index:-1;
    width:100%;

    @media(max-width:768px){
        width:700px;
        left:-80px;
        top:0;
    }
`;

export default NotFound;