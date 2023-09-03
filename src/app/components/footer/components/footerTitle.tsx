import styled from 'styled-components';
import { Col, Row } from '../../grid';

interface ItemProps {
    text?: string;
}

export const FooterTitle: React.FC<ItemProps> = ({text}) => {

    return(
        <Row>
            <Col>
                <Title>{text}</Title>
            </Col>
        </Row>
    )
}

const Title = styled.div`
    font-size:3.8rem;
    color:var(--text-white);
    font-family: var(--font-primary);
    white-space: pre-line;
    line-height:1;
    font-weight:600;
    text-transform:uppercase;

    @media(max-width:768px){
        font-size:1.4rem;
    }
`;