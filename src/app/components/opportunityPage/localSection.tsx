import styled from 'styled-components';
import { Col, Row } from "../grid";
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

    return (
        <LocalSection>
            <Row className="break">
                <Col flex={2}>
                    <SectionSubTitle text={`A localização`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={4}>
                    <TitleContainer>
                        <Title className={`${Baskerville.className}`}>{district}</Title>
                        <p className="no-desktop-available">, </p>
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

    .break{
        @media(max-width:768px){
            flex-direction:column;
        }
    }

    .no-desktop-available {
        @media(min-width:768px){
            display:none;
        }
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
