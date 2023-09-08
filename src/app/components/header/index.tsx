"use client"
import styled from 'styled-components';
import { Col, Container, Row, Section } from '../grid';
import { CallNumber } from './components/callNumber';
import { ItemMenu } from './../itemMenu';
import { ToogleMenu } from './components/toogleMenu';
import useScreenSize from '../../../hooks/useScreenSize';
import { Logo } from '../logo';

interface MenuItem {
    text: string;
    href?: string;
  }

export const Header = () => {

    const isLargeScreen = useScreenSize(768)

    const itemMenuList: MenuItem[] = [
        {href:'./../sobre', text:'Sobre'},
        {href:'./../empreendimentos', text:'Empreendimentos'},
        {href:'./../investidor', text:'Seja um investidor'},
        {href:'./../atendimento', text:'Central de vendas'},
        {href:'./../contato', text:'Contato'}
    ]

    const itemMenuBurguerList: MenuItem[] = [
        {href:'./../oportunidades', text:'Oportunidades'},
        {href:'./../permutas', text:'Permutas'},
        {href:'./../trabalhe-conosco', text:'Trabalhe conosco'},
        {href:'./../blog', text:'Blog'},
    ]

    return(
        <Section background="var(--background-primary)" fixHeight={70} position="fixed" zIndex='999'>
            <Container>
                <Row>
                    <Col flex={2}>
                        <Logo width={140} color="white" />
                    </Col>
                    {isLargeScreen.isLargeScreen ?
                    <Col flex={10}>
                        <Row>
                            <ContainerItemsMenu>
                                {itemMenuList.map((item, index) => (
                                    <Col key={index}><ItemMenu href={item.href} text={item.text}/></Col>
                                ))}

                            </ContainerItemsMenu>
                            <Col>
                                <CallNumber number='47999999999'/>
                            </Col>
                            <ToogleMenu itens={itemMenuList} burgerItens={itemMenuBurguerList}/>
                        </Row>
                    </Col>
                    :
                        <Col>
                            <ToogleMenu itens={itemMenuList} burgerItens={itemMenuBurguerList}/>
                        </Col>
                    }
                </Row>
            </Container>
        </Section>
    )
}

const ContainerItemsMenu = styled.div`
    display:flex;
    flex-direction:row;
    max-width:840px;
`;