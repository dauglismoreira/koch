"use client"

import styled from 'styled-components';
import { Col, Container, Section } from "../grid";
import { FooterTitle } from "./components/footerTitle";
import { FooterMenu } from "./components/footerMenu";
import { FooterSocial, Text } from "./components/footerSocial";
import { FooterRights } from "./components/footerRights";
import useScreenSize from '../../../hooks/useScreenSize';
import { ItemMenu } from '../itemMenu';
import { Logo } from '../logo';

export const Footer = () => {

    const isLargeScreen = useScreenSize(768)

    const phone = '47999999999';
    const email = 'koch@kockempreendimentos.com.br';
    const street = 'R. 210 - Meia Praia, Itapema';
    const city = 'Santa Catarina'; 
  
    const itemMenuList = [
      {href:'./../sobre', text:'Sobre'},
      {href:'./../empreendimentos', text:'Empreendimentos'},
      {href:'./../atendimento', text:'Central de vendas'},
      {href:'./../trabalhe-conosco', text:'Trabalhe conosco'},
      {href:'./../contato', text:'Contato'},
      {href:'./../blog', text:'Blog'}
    ]
  
    const itemSocialList = [
      {href:'#', text:'Instagram'},
      {href:'#', text:'Linkedin'},
      {href:'#', text:'Youtube'}
    ]

    return(
        <Section
            background="var(--background-primary)"
            padding={!isLargeScreen.isLargeScreen ? "160px 0 100px" : "60px 10px 40px"}
        >
            <Container>
                <FooterTitle text={`Entre \n em contato`}/>
                {isLargeScreen.isLargeScreen && <LineDivider/>}
                <FooterMenu activeBreak={isLargeScreen.isLargeScreen} items={itemMenuList} number={phone} email={email}/>
                <LineDivider/>
                {!isLargeScreen.isLargeScreen && <Text>{street} - {city}</Text>}
                {!isLargeScreen.isLargeScreen && <LineDivider/>}
                <FooterSocial activeBreak={isLargeScreen.isLargeScreen} street={street} city={city} color='white' items={itemSocialList}/>
                <LineDivider/>
                {!isLargeScreen.isLargeScreen && 
                    <MenuMobileContainerGrid>
                        {itemMenuList && itemMenuList.map((item, index) => (
                            <Col key={index} padding='15px 0 0' align="left"><ItemMenu href={item.href} text={item.text}/></Col>
                        ))}
                    </MenuMobileContainerGrid>
                }
                {!isLargeScreen.isLargeScreen && <LineDivider/> }
                {!isLargeScreen.isLargeScreen && <ContainerLogo><Logo  padding="0 0 0 40px" width={180} color="white"/></ContainerLogo> }
                <FooterRights/>
            </Container>
        </Section>
    )
} 

const LineDivider = styled.div`
    height:1px;
    width:100%;
    margin:35px 0;
    background-color:rgba(255,255,255,0.3);

    @media(max-width:768px){
        margin:25px 0;
    }
`;

const MenuMobileContainerGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:-10px 0 30px;
`;

const ContainerLogo = styled.div`
    position:relative;
    margin:-15px 0 0 -22px;
`;