import useScreenSize from '@/hooks/useScreenSize';
import { Col, Row } from '../../grid';
import { ItemMenu } from '../../itemMenu';
import { CallNumber } from './callNumber';
import { VerticalDivider } from './verticalDivider';
import { useEffect, useState } from 'react';

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

    const {width} = useScreenSize(768)
    const [col1, setCol1] = useState(6)
    const [col2, setCol2] = useState(6)

    useEffect(() => {
        if(width < 1500 && width !== 0){
            setCol1(3)
            setCol2(9)
        }
    }, [width])

    return(
        <Row>
        <Col flex={col1}>
            <CallNumber
                number={number}
                email={email}
            />
        </Col>
        {activeBreak && <VerticalDivider/>}
        {activeBreak && <Col flex={col2}>
            <Row>
                {items && items.map((item, index) => (
                    <Col key={index} padding='15px 0 0' align="right"><ItemMenu href={item.href} text={item.text}/></Col>
                ))}
            </Row>
        </Col>}
    </Row>
    )
}