import { Col, Row } from '../../grid';
import { ItemMenu } from '../../itemMenu';
import { CallNumber } from './callNumber';
import { VerticalDivider } from './verticalDivider';

interface MenuItem {
    href: string;
    text: string;
}

interface FooterMenuProps {
    items?: MenuItem[];
    number?: string;
    email?: string;
    activeBreak?: boolean;
}

export const FooterMenu: React.FC<FooterMenuProps> = ({activeBreak, items, number, email}) => {

    return(
        <Row>
        <Col flex={6}>
            <CallNumber
                number={number}
                email={email}
            />
        </Col>
        {activeBreak && <VerticalDivider/>}
        {activeBreak && <Col flex={6}>
            <Row>
                {items && items.map((item, index) => (
                    <Col key={index} padding='15px 0 0' align="right"><ItemMenu href={item.href} text={item.text}/></Col>
                ))}
            </Row>
        </Col>}
    </Row>
    )
}