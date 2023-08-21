import { Col, Container, Row, Section } from '../grid';
import { ItemMenu } from './components/itemMenu';

export const Header = () => {

    const itemMenuList = [
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
        <Section background="var(--background-primary)">
            <Container>
                <Row>
                    <Col>
                        LOGO
                    </Col>
                        {itemMenuList.map((item, index) => (
                            <Col key={index}><ItemMenu href={item.href} text={item.text}/></Col>
                        ))}
                    <Col>
                        Contato
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}