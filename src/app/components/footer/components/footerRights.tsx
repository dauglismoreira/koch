import { Col, Row } from '../../grid';
import { CopyRight } from './copyRight';
import { ImpacteText } from './impacte';
import ImpacteIcon from "@/impacte/ImpacteIcon";

export const FooterRights = ({}) => {

    return(
        <Row>
            <Col>
                <a href="./../../termos"><CopyRight text="Política de Privacidade e Segurança, ©2023 - Todos os direitos reservados"/></a>
            </Col>
            <Col>
                <ImpacteText text="Desenvolvido por ">
                    <ImpacteIcon />
                </ImpacteText>
            </Col>
        </Row>
    )
}