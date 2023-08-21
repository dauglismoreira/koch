"use client"

import { Col, Container, Row, Section } from '../grid';
import useScreenSize from '../../hooks/useScreenSize';
import { Logo } from '../logo';
import { FooterTitle } from './components/footerTitle';

interface MenuItem {
    text: string;
    href?: string;
  }

export const Footer = () => {

    // const isLargeScreen = useScreenSize(1280);

    const itemMenuList: MenuItem[] = [
        {href:'#', text:'Sobre'},
        {href:'#', text:'Empreendimentos'},
        {href:'#', text:'Seja um investidor'},
        {href:'#', text:'Oportunidades'},
        {href:'#', text:'Permutas'},
        {href:'#', text:'Central de vendas'},
        {href:'#', text:'Trabalhe conosco'},
        {href:'#', text:'Blog'},
        {href:'#', text:'Contato'}
    ]

    return(
        <div style={{paddingTop:'400px'}}>
        <Section background="var(--background-primary)">
            <Container>
                <Row>
                    {/* <Col>
                        <Logo desktop={140} mobile={140} color="white" />
                    </Col>
                    {isLargeScreen ?
                    <>
                        {itemMenuList.map((item, index) => (
                            <Col key={index}><ItemMenu href={item.href} text={item.text}/></Col>
                        ))}
                        <Col>
                            <CallNumber number='47999999999'/>
                        </Col>
                    </>
                    :
                        <Col>
                            <ToogleMenu itens={itemMenuList}/>
                        </Col>
                    } */}
                    <Col>
                        <FooterTitle text="Entre em contato"/>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Section>
        </div>
    )
}