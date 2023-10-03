'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../components/grid';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { SectionTitle } from '../components/sectionTitle';
import { dataTerms } from './data';
import { SectionBodyText } from '../components/sectionBodyText';


const Terms = () => {

    return (
        <TermsContainer>
            <Section position='relative' className="section" background="var(--background-secondary)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={`Segurança e\nPrivacidade`} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle size="var(--small-title-size)" text={dataTerms[0].title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="no-mobile-available" flex={2}></Col>
                        <Col flex={10}>
                            <SectionBodyText text={dataTerms[0].content} color='var(--text-secondary)'/>
                        </Col>
                    </Row>
                    <Row className="break">
                        <Col flex={2}></Col>
                        <Col flex={10} className="title">
                            <SectionTitle size="var(--small-title-size)" text={dataTerms[1].title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="no-mobile-available" flex={2}></Col>
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

    .section{
        padding:180px 0 100px;

        @media(max-width:768px){
            padding:128px 0;
        }
    }

    .no-mobile-available {
        @media(max-width:768px){
            display:none;
        }
    }

    .break {
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

export default Terms;