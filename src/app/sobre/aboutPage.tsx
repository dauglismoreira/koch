'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { Accordion } from '../components/accordion';
import {AboutImageBanner} from '../components/aboutImageBanner';
import SvgComponent from '../components/SvgComponent';

interface AboutPageProps {
    aboutItemsAccordion: any;
    aboutInfo: any;
    aboutSecondInfo: any;
}

export const AboutPage: React.FC<AboutPageProps> = ({ aboutItemsAccordion, aboutInfo, aboutSecondInfo }) => {

    return (
        <AboutSectionContainer>
            <Section position="relative" className="section" background="var(--background-primary-variation)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={aboutInfo && aboutInfo.title} color="var(--text-white)"/>
                        </Col>
                    </Row>
                    <Row className="break">
                        <Col flex={2}></Col>
                        <Col flex={5}>
                            <Content>
                                <SectionBodyText text={aboutInfo && aboutInfo.content} color="var(--text-white)"/>
                                <Accordion data={aboutItemsAccordion}/>
                            </Content>
                        </Col>
                        <Col flex={5}>
                            <BannerImage></BannerImage>
                        </Col>
                    </Row>
                </Container>
                <AboutImageBanner data={aboutSecondInfo}/>
                <SvgContainer>
                    <SvgComponent className="sv1" color="#182842" border="#182842"/>
                </SvgContainer>
            </Section>
            </AboutSectionContainer>
    )
}

const AboutSectionContainer = styled.div`
    .section{
        padding:120px 0;

        @media(max-width:768px){
            padding:140px 0 40px;
        }
    }

    .break {
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    p {
        font-size:var(--desktop-text-size);
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;

        p {
            font-size:var(--mobile-text-size);
        }
    }
`;

const BannerImage = styled.div`
    margin:auto;
    width:80%;
    height:657px;
    background-image:url('./images/about.png');
    background-position: center center;
    background-size:cover;

    @media(max-width: 768px){
        width:calc(100% - 20px);
        height:455px;
    }
`;

const SvgContainer = styled.div`
    position:absolute;
    top:-100px;
    bottom:0;
    right:-600px;
    z-index:-1;
    width:1800px;

    @media(max-width:768px){
        width:700px;
        left:50px;
    }
`;