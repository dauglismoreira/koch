'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { Accordion } from '../components/accordion';
import {AboutImageBanner} from '../components/aboutImageBanner';

interface AboutPageProps {
    aboutItemsAccordion: any;
    aboutInfo: any;
    aboutSecondInfo: any;
}

export const AboutPage: React.FC<AboutPageProps> = ({ aboutItemsAccordion, aboutInfo, aboutSecondInfo }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "140px 0 40px" : "120px 0"} background="var(--background-primary-variation)">
                <Container>
                    <Row break={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={aboutInfo && aboutInfo.title} color="var(--text-white)"/>
                        </Col>
                    </Row>
                    <Row break={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}></Col>
                        <Col flex={5}>
                            <Content>
                                <SectionBodyText text={aboutInfo && aboutInfo.content} color="var(--text-white)"/>
                                <Accordion data={aboutItemsAccordion}/>
                            </Content>
                        </Col>
                        <Col flex={5}>
                            <Image></Image>
                        </Col>
                    </Row>
                </Container>
                <AboutImageBanner data={aboutSecondInfo}/>
            </Section>
            </>
    )
}

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    p {
        font-size:14px;
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;
    }
`;

const Image = styled.div`
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