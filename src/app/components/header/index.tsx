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

    const isLargeScreen = useScreenSize(992)

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

    const itemInitial: MenuItem[] = [
        {href:'./../', text:'Início'},
    ]

    const itemSocialList: MenuItem[] = [
        {href:'#', text:'Instagram'},
        {href:'#', text:'Linkedin'},
        {href:'#', text:'Youtube'}
      ]

    return(
        <HeaderContainer>
        <Section className="section" background="var(--background-primary)" position="fixed" zindex='999'>
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
                            <ToogleMenu itemSocialList={itemSocialList} initial={itemInitial} itens={itemMenuList} burgerItens={itemMenuBurguerList}/>
                        </Row>
                    </Col>
                    :
                        <Col>
                            <ToogleMenu itemSocialList={itemSocialList} initial={itemInitial} itens={itemMenuList} burgerItens={itemMenuBurguerList}/>
                        </Col>
                    }
                </Row>
            </Container>
        </Section>
        </HeaderContainer>
    )
}

const ContainerItemsMenu = styled.div`
    display:flex;
    flex-direction:row;
    max-width:840px;
    margin-top:0px;
`;

const HeaderContainer = styled.div`
    .section{
        height:70px;
    }
`;