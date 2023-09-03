import styled from 'styled-components';
import { Col, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { Localization } from '@/app/empreendimento/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';
import Maps from '@/app/components/map';

interface EnterLocalSectionProps {
    data:Localization;
    district:string;
    city:string;
}

export const EnterLocalSection: React.FC<EnterLocalSectionProps> = ({
    data,
    district,
    city
}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <LocalSection>
            <Row break={!isLargeScreen.isLargeScreen}>
                <Col flex={2}>
                    <SectionSubTitle text={`A localização`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={4}>
                    <Title>{district}</Title>
                    <Title>{city}</Title>
                    <SectionBodyText text={data.local_description} color="var(--text-secondary)"/>
                    {isLargeScreen.isLargeScreen && <LocalContainer>
                        {data.nearby.map((nearby, index) => (
                            <span key={index}>{nearby}</span>
                        ))}
                    </LocalContainer>}
                </Col>
                <Col flex={6}>
                    <Maps
                        latI={data.latitude}
                        lngI={data.longitude}
                        zoomLevel={16}
                    />
                </Col>
            </Row>
        </LocalSection>
    )
}


const LocalSection = styled.div`
    padding:140px 0;

    @media(max-width:768px){
        padding:60px 0;
    }
`;

const Title = styled.h4`
    color:var(--text-primary);
    font-size:24px;
    font-family:var(--font-primary);
    text-transform:uppercase;
    font-weight:900;

    @media(max-width:768px){
        text-align:center;
    }
`;

const LocalContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px 0;

    span{
        width:100%;
        display:block;
        border-bottom:solid 1px var(border-grey);
        padding:20px 0;
        color:var(--text-secondary);
    }
`;

