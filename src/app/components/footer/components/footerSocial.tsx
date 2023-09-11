import styled from 'styled-components';
import { Col, Row } from '../../grid';
import { Logo } from '../../logo';
import { VerticalDivider } from './verticalDivider';
import { FooterSocialMenu } from './socialMenu';
import { useEffect, useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

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

    const {width} = useScreenSize(768)
    const [col1, setCol1] = useState(8)
    const [col2, setCol2] = useState(3)
    const [col3, setCol3] = useState(1)

    useEffect(() => {
        if(width < 1500 && width > 1200){
            setCol1(7)
            setCol2(4)
        }
        if(width < 1200){
            setCol1(5)
            setCol2(6)
        }
    }, [width])

    return(
        <Row>
            {activeBreak && <Col flex={col1}>
                <Text>{street}<br></br>
                {city}</Text>
            </Col>}
            {activeBreak && <VerticalDivider margin="-27px 45px"/>}
            <Col flex={col2}><FooterSocialMenu activeBreak={activeBreak} items={items}/></Col>
            {activeBreak && <VerticalDivider margin="-27px 0 -27px 10px"/>}
            {activeBreak && <Col flex={col3}>
                <Logo padding="0 0 0 40px" width={180} color={color} />
            </Col>}
        </Row>
    )
}

export const Text = styled.p`
    font-size:var(--labels-size);
    color:var(--text-white);
    line-height:1.4;
    font-weight:var(--labels-weight);

    @media(max-width:768px){
        padding:0 5px;
    }
`;