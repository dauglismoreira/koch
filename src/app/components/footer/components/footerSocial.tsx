import styled from 'styled-components';
import { Col, Row } from '../../grid';
import { Logo } from '../../logo';
import { VerticalDivider } from './verticalDivider';
import { FooterSocialMenu } from './socialMenu';

export interface MenuItem {
    href: string;
    text: string;
}

interface FooterSocialProps {
    items?: MenuItem[];
    color?: string;
    street?: string;
    city?: string;
    activeBreak?: boolean;
}

export const FooterSocial: React.FC<FooterSocialProps> = ({activeBreak, items, color, street, city}) => {

    return(
        <Row>
            {activeBreak && <Col flex={8}>
                <Text>{street}<br></br>
                {city}</Text>
            </Col>}
            {activeBreak && <VerticalDivider margin="-27px 45px"/>}
            <Col flex={3}><FooterSocialMenu activeBreak={activeBreak} items={items}/></Col>
            {activeBreak && <VerticalDivider margin="-27px 0 -27px 10px"/>}
            {activeBreak && <Col flex={1}>
                <Logo padding="0 0 0 40px" desktop={180} mobile={180} color={color} />
            </Col>}
        </Row>
    )
}

export const Text = styled.p`
    font-size:0.8rem;
    color:var(--text-white);
    line-height:1.4;
    font-weight:200;

    @media(max-width:768px){
        font-weight:300;
    }
`;