import styled from 'styled-components';
import { Col, Row } from "../grid";
import { Localization } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';
import Maps from '@/app/components/map';
import { Baskerville } from '@/app/fonts';

interface OpportunityLocalSectionProps {
    data:string;
    district:string;
    city:string;
    map:any;
}

export const OpportunityLocalSection: React.FC<OpportunityLocalSectionProps> = ({
    data,
    district,
    city,
    map
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
                    <SectionBodyText text={data} color="var(--text-secondary)"/>
                </Col>
                <Col flex={6}>
                    {map &&
                    <Map>
                        <div dangerouslySetInnerHTML={{ __html: map }} />
                    </Map>}
                </Col>
            </Row>
        </LocalSection>
    )
}


const LocalSection = styled.div`
    padding:100px 0;

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

const TitleContainer = styled.div`
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

const Map = styled.div`
    iframe{
        width:100%;
        height: 480px;

        @media screen and (max-width: 799px) {
            height:300px;
        }
    }
`;