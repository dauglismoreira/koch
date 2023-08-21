"use client"

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../grid';
import useScreenSize from '../../hooks/useScreenSize';
import { Logo } from '../logo';
import { FooterTitle } from './components/footerTitle';
import { ItemMenu } from '../header/components/itemMenu';
import { CopyRight } from './components/copyRight';
import { ImpacteText } from './components/impacte';
import { CallNumber } from './components/callNumber';

interface MenuItem {
    text: string;
    href?: string;
  }

export const Footer = () => {

    // const isLargeScreen = useScreenSize(1280);

    const itemMenuList: MenuItem[] = [
        {href:'#', text:'Sobre'},
        {href:'#', text:'Empreendimentos'},
        {href:'#', text:'Central de vendas'},
        {href:'#', text:'Trabalhe conosco'},
        {href:'#', text:'Contato'},
        {href:'#', text:'Blog'}
    ]

    const itemSocialList: MenuItem[] = [
        {href:'#', text:'Instagram'},
        {href:'#', text:'Linkedin'},
        {href:'#', text:'Youtube'}
    ]

    return(
        <div style={{paddingTop:'400px'}}>
        <Section background="var(--background-primary)" padding="160px 0 100px">
            <Container>
                <Row>
                    <Col>
                        <FooterTitle text={`Entre \n em contato`}/>
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row>
                    <Col flex={6}>
                        <CallNumber
                            number='47999999999'
                            email='koch@kockempreendimentos.com.br'
                        />
                    </Col>
                    <Col flex={6}>
                        <Row>
                            {itemMenuList.map((item, index) => (
                                <Col key={index}><ItemMenu href={item.href} text={item.text}/></Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row>
                    <Col flex={8}>
                        R. 210 - Meia Praia, Itapema<br></br>
                        Santa Catarina
                    </Col>
                    {itemSocialList.map((item, index) => (
                        <Col flex={1} key={index}><ItemMenu href={item.href} text={item.text}/></Col>
                    ))}
                    <Col flex={1}>
                        <Logo desktop={180} mobile={180} color="white" />
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row>
                    <Col>
                        <CopyRight text="Política de Privacidade e Segurança, ©2023 - Todos os direitos reservados"/>
                    </Col>
                    <Col>
                        <ImpacteText text="Desenvolvido por impacte"/>
                    </Col>
                </Row>
            </Container>
        </Section>
        </div>
    )
}

const LineDivider = styled.div`
    height:1px;
    width:100%;
    margin:35px 0;
    background-color:rgba(255,255,255,0.3);
`;