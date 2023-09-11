'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../components/grid';
import useScreenSize from '@/hooks/useScreenSize';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { SectionTitle } from '../components/sectionTitle';
import { dataTerms } from './data';
import { SectionBodyText } from '../components/sectionBodyText';


const Terms = () => {
    const isLargeScreen = useScreenSize(768);

    return (
        <TermsContainer>
            <Section position='relative' padding={!isLargeScreen.isLargeScreen ? "128px 0" : "180px 0 100px"} background="var(--background-secondary)">
                <Container>
                    <Row breakpoint={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}>
                            <SectionSubTitle text={`Segurança e\nPrivacidade`} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle size="var(--small-title-size)" text={dataTerms[0].title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                        <Col flex={10}>
                            <SectionBodyText text={dataTerms[0].content} color='var(--text-secondary)'/>
                        </Col>
                    </Row>
                    <Row breakpoint={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}></Col>
                        <Col flex={10} className="title">
                            <SectionTitle size="var(--small-title-size)" text={dataTerms[1].title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                        <Col flex={10}>
                            <SectionBodyText text={dataTerms[1].content} color='var(--text-secondary)'/>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </TermsContainer>
    )
}

const TermsContainer = styled.div`
    .title{
        margin-top:30px;
    }
`;

export default Terms;