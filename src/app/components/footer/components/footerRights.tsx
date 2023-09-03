import { Col, Row } from '../../grid';
import { CopyRight } from './copyRight';
import { ImpacteText } from './impacte';

export const FooterRights = ({}) => {

    return(
        <Row>
            <Col>
                <CopyRight text="Política de Privacidade e Segurança, ©2023 - Todos os direitos reservados"/>
            </Col>
            <Col>
                <ImpacteText text="Desenvolvido por impacte"/>
            </Col>
        </Row>
    )
}