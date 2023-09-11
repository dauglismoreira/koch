import styled from 'styled-components';
import { Col, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { Localization } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';
import Maps from '@/app/components/map';
import { Baskerville } from '@/app/fonts';

interface OpportunityLocalSectionProps {
    data:Localization;
    district:string;
    city:string;
}

export const OpportunityLocalSection: React.FC<OpportunityLocalSectionProps> = ({
    data,
    district,
    city
}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <LocalSection>
            <Row breakpoint={!isLargeScreen.isLargeScreen}>
                <Col flex={2}>
                    <SectionSubTitle text={`A localização`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={4}>
                    <TitleContainer>
                        <Title className={`${Baskerville.className}`}>{district}</Title>
                        {!isLargeScreen.isLargeScreen && <p>, </p>}
                        <Title className={`${Baskerville.className}`}>{city}</Title>
                    </TitleContainer>
                    <SectionBodyText text={data.local_description} color="var(--text-secondary)"/>
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

const TitleContainer = styled.h4`
    @media(max-width:768px){
        display:flex;
        justify-content:center;
        padding-bottom:24px;

        p {
           margin-right:5px;
        }
    }
`;

const Title = styled.h4`
    color:var(--text-primary);
    font-size:var(--small-title-size);
    text-transform:uppercase;
    font-weight:var(--medium-title-weight);

    @media(max-width:768px){
        text-align:center;
    }
`;
