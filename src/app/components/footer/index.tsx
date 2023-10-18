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

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const street = 'R. 210 - Meia Praia, Itapema';
    const city = 'Santa Catarina'; 
  
    const itemMenuList = [
      {href:'./../sobre', text:'A Koch'},
      {href:'./../empreendimentos', text:'Empreendimentos'},
      {href:'./../atendimento', text:'Nosso time'},
      {href:'./../trabalhe-conosco', text:'Trabalhe conosco'},
      {href:'./../contato', text:'Contato'},
      {href:'./../blog', text:'Blog'}
    ]
  
    const itemSocialList = [
      {href:process.env.NEXT_PUBLIC_INSTAGRAM, text:'Instagram'},
      {href:process.env.NEXT_PUBLIC_LINKEDIN, text:'Linkedin'},
      {href:process.env.NEXT_PUBLIC_YOUTUBE, text:'Youtube'}
    ]

    return(
        <Section
            background="var(--background-primary)"
            padding={isLargeScreen.isLargeScreen ? "160px 10px 100px" : "56px 10px 40px"}
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
        margin:25px auto;
        width:calc(100% - 10px);
    }
`;

const MenuMobileContainerGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin:-10px 0 30px;

    @media(max-width:768px){
        padding:0 5px;
    }
`;

const ContainerLogo = styled.div`
    position:relative;
    margin:-15px 0 0 -22px;
`;