import styled from 'styled-components';
import { Col, Row } from "../grid";
import { Localization } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';
import Maps from '@/app/components/map';
import { Baskerville } from '@/app/fonts';

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

    return (
        <LocalSection>
            <Row className="break">
                <Col flex={2}>
                    <SectionSubTitle text={`A localização`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={4}>
                    <TitleContainer>
                        <Title className={`${Baskerville.className}`}>{district}</Title>
                        <p className="no-mobile-available">, </p>
                        <Title className={`${Baskerville.className}`}>{city}</Title>
                    </TitleContainer>
                    <SectionBodyText text={data.local_description} color="var(--text-secondary)"/>
                    <LocalContainer>
                        {data.nearby.map((nearby, index) => (
                            <span key={index}>{nearby}</span>
                        ))}
                    </LocalContainer>
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

    .no-mobile-available{
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

    @media(max-width:768px){
        margin:10px 0;

        span {
            padding:15px 0;
            width:calc(100% - 20px);
            margin:auto;
            border-bottom:solid 1px var(--border-grey);
        }
    }
`;

