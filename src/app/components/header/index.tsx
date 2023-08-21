"use client"

import {useState, useEffect} from 'react';
import { Col, Container, Row, Section } from '../grid';
import { CallNumber } from './components/callNumber';
import { ItemMenu } from './components/itemMenu';
import { ToogleMenu } from './components/toogleMenu';
import useScreenSize from '../../hooks/useScreenSize';
import { Logo } from '../logo';

interface MenuItem {
    text: string;
    href?: string;
  }

export const Header = () => {

    const isLargeScreen = useScreenSize(1280);

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
        <Section background="var(--background-primary)" fixHeight={70} position="fixed">
            <Container>
                <Row>
                    <Col>
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
                    }
                </Row>
            </Container>
        </Section>
    )
}