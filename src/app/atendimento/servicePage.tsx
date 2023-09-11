'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { ContainerButtons } from '../components/containerButtons';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionTitle } from '../components/sectionTitle';
import { BrokerCard, CardProps } from '../components/brokerCard';
import { useState } from 'react';
import Maps from '../components/map';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import {Mandatory} from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';
import { ContactInfos } from '../components/contactInfos';

interface ServicePageProps {
    opportunitiesButtons:any;
    oportunitiesInfo:any;
    contactInfo:any;
    formInfo:any;
    brokersList:CardProps[];
    formInputsLeft:any;
    formInputsRight:any;
    phone:string;
    email:string;
    street:string;
    city:string;
}

export const ServicePage: React.FC<ServicePageProps> = ({
        oportunitiesInfo,
        opportunitiesButtons,
        contactInfo,
        formInfo,
        brokersList,
        formInputsLeft,
        formInputsRight,
        phone,
        email,
        street,
        city
    }) => {
    const isLargeScreen = useScreenSize(768);
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);

    const handleFormSubmit = () => {
        console.log(formData);
    };

    return (
        <>
        <Section padding={!isLargeScreen.isLargeScreen ? "120px 0" : "120px 0"} background="var(--background-secondary)">
            <Container>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={oportunitiesInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle text={oportunitiesInfo.title} color="var(--text-primary)"/>
                                <SectionBodyText  text={oportunitiesInfo.content} color="var(--text-secondary)"/>
                            </Title>
                            <ContainerButtons color="var(--text-white)" background="var(--text-primary)" buttonsList={opportunitiesButtons}/>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                    <Col flex={10}>
                        <BrokersListContainer>
                            {brokersList.map((broker, index) => (
                                <BrokerCard key={index} data={broker} />
                            ))}
                        </BrokersListContainer>
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={contactInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle size="24px" text={contactInfo.title} color="var(--text-primary)"/>
                                <SectionBodyText  text={contactInfo.content} color="var(--text-secondary)"/>
                            </Title>
                        </Content>
                    </Col>
                </Row>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}></Col>
                    <Col flex={4}>
                        <ContactInfos
                            phone={phone}
                            city={city}
                            street={street}
                            email={email}
                        />
                    </Col>
                    <Col flex={6}>
                        {/* <Maps
                            latI={-27.120616076517972}
                            lngI={-48.6081570743573}
                            zoomLevel={16}
                        /> */}
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={formInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle size="24px" text={formInfo.title} color="var(--text-primary)"/>
                                <SectionBodyText  text={formInfo.content} color="var(--text-secondary)"/>
                            </Title>
                        </Content>
                    </Col>
                </Row>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                <Col flex={10} padding="15px 10px">
                    <InputGenerate
                        leftInputs={formInputsLeft}
                        rightInputs={formInputsRight}
                        formData={formData}
                        setFormData={setFormData}
                        color="var(--text-primary)"
                    />
                </Col>
                </Row>
                <Row>
                {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                    <Col flex={10}>
                        <ActionContainer>
                            <Mandatory color="var(--text-primary)"/>
                            <CheckFormAccept  onAcceptChange={setAccept} color="var(--text-primary)"/>
                                {accept ?
                                    <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                    :
                                    <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                }
                        </ActionContainer>        
                    </Col>
                </Row>
            </Container>
        </Section>
        </>
    )
}

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.div`

`;

const BrokersListContainer = styled.div`
  width:100%;
  margin:80px 0;
  display: grid;
  gap:10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media(max-width:1240) and (min-width:768px){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
    margin:30px 0;
  }
`;

const LineDivider = styled.div`
  width:100%;
  height:1px;
  background-color:var(--border-grey);
  margin:30px 0 100px;

  @media(max-width:768px){
    margin:30px 10px;
    width:calc(100% - 20px);
  }
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    margin-top:20px;

    button {
        height:35px;
        width:90px;
        background-color:transparent;
        border:solid 1px var(--text-primary);
        color:var(--text-primary);
        text-transform:uppercase;
        cursor:pointer;
        border-radius:5px;
        font-size:(--buttons-size);
        font-weight:(--buttons-weight);

        &:hover {
            background-color:var(--text-primary);
            color:var(--text-white);
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
        margin-top:0px;
        padding:0 10px;
        margin-bottom:-20px;
    }
`;