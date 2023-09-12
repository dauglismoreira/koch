'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import {CheckFormAccept} from '../components/formGenerator/components/check';
import {Mandatory} from '../components/formGenerator/components/notice';
import SvgComponent from '../components/SvgComponent';

interface InvestorPageProps {
    aboutInfo:any;
    formInputs:any;
}

export const InvestorPage: React.FC<InvestorPageProps> = ({ aboutInfo, formInputs}) => {
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);

    const handleFormSubmit = () => {
        console.log(formData);
    };

    return (
        <InvestorPageSectionContainer>
            <Section position='relative'className="section" background="var(--background-secondary-variation)">
                <Container>
                    <Row  className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={aboutInfo && aboutInfo.title} color="var(--text-white)"/>
                        </Col>
                    </Row>
                    <Row className="break">
                        <Col flex={2}></Col>
                        <Col flex={10}>
                            <Content>
                                <SectionBodyText text={aboutInfo && aboutInfo.content} color="var(--text-white)"/>
                                <InputGenerate
                                    leftInputs={formInputs}
                                    formData={formData}
                                    setFormData={setFormData}
                                    color="var(--text-white)"
                                />
                            </Content>
                        </Col>
                    </Row>
                    <Row  className="break">
                        <Col className="no-mobile-available" flex={2}></Col>
                        <Col flex={5}>
                            <ActionContainer>
                                <Mandatory color="var(--text-white)"/>
                                <CheckFormAccept color="var(--text-white)"  onAcceptChange={setAccept}/>
                                {accept ?
                                    <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                    :
                                    <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                }
                            </ActionContainer>
                        </Col>
                        <Col className="no-mobile-available" flex={5}></Col>
                    </Row>
                </Container>
                <SvgContainer>
                    <SvgComponent className="sv2" color="var(--background-grey)" border="white"/>
                </SvgContainer>
            </Section>
        </InvestorPageSectionContainer>
    )
}

const InvestorPageSectionContainer = styled.div`
    .section{
        padding:120px 0;

        @media(max-width:768px){
            padding:140px 0 40px;
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

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    p {
        font-size:var(--text-desktop-size);
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;

        p {
            margin-top:0;
            padding:0;
            font-size:var(--text-mobile-size);
        }
    }
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;

    button {
        height:35px;
        width:90px;
        background-color:transparent;
        border:solid 1px var(--text-white);
        color:var(--text-white);
        text-transform:uppercase;
        cursor:pointer;
        border-radius:5px;
        font-size:var(--buttons-size);
        font-weight:var(--buttons-weight);

        &:hover {
            background-color:var(--text-white);
            color:var(--background-secondary-variation);
        }

        &:disabled {
            background-color: #888;
            border-color: var(--text-secondary);
            color:  #cdcdcd;
            cursor: not-allowed;
        }

        @media(max-width:768px){
            width:100%;
        }
    }
`;

const ActionContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    gap:20px;

    @media(max-width:768px){
        margin-top:-40px;
        padding:0 10px;
        margin-bottom:30px;
    }
`;

const SvgContainer = styled.div`
    position:absolute;
    top:-160px;
    bottom:0;
    left:65%;
    z-index:-1;
    width:1400px;

    @media(max-width:768px){
        display:none;
    }
`;