import styled from 'styled-components';
import { Col, Row } from '../../grid';
import { Baskerville } from '@/app/fonts';

interface ItemProps {
    text?: string;
}

export const FooterTitle: React.FC<ItemProps> = ({text}) => {

    return(
        <Row>
            <Col>
                <Title className={`${Baskerville.className}`}>{text}</Title>
            </Col>
        </Row>
    )
}

const Title = styled.div`
    font-size:var(--big-title-size);
    color:var(--text-white);
    white-space: pre-line;
    line-height:1;
    font-weight:var(--big-title-weight);
    text-transform:uppercase;

    @media(max-width:768px){
        font-size:var(--medium-title-size);
    }
`;