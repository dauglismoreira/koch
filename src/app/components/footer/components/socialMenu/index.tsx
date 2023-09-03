import styled from 'styled-components';
import { Col, Row } from '../../../grid';
import { MenuItem } from '../footerSocial';
import { ItemMenu } from '@/app/components/itemMenu';
import { VerticalDivider } from '../verticalDivider';

interface ItemProps {
    items?: MenuItem[];
    activeBreak?: boolean;
}

export const FooterSocialMenu: React.FC<ItemProps> = ({items, activeBreak}) => {

    return(
        <SocialContainer>
            <Row>
                <Col className="left">
                    <ItemMenu href={items && items[0]?.href} text={items && items[0]?.text}/>
                </Col>
                {!activeBreak && <Col><VerticalDivider margin="-25px 5px" height='72px'/></Col>}
                <Col>
                    <ItemMenu href={items && items[1]?.href} text={items && items[1]?.text}/>
                </Col>
                {!activeBreak && <Col><VerticalDivider margin="-25px 5px" height='72px'/></Col>}
                <Col className="right">
                    <ItemMenu href={items && items[2]?.href} text={items && items[2]?.text}/>
                </Col>
            </Row>
        </SocialContainer>
    )
}

const SocialContainer = styled.div`
    height:30px;

    @media(min-width:768px){
        margin-top:10px;
    }
`;