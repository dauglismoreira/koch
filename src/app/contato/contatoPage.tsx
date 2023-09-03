'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionTitle } from '../components/sectionTitle';
import { useState } from 'react';
import Maps from '../components/map';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import { Mandatory } from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';

interface SocialLinksProps {
    text:string;
    href:string;
}

interface ContatoPageProps {
    formInputs:any;
    contactInfo:any;
    itemSocialList:SocialLinksProps[];
}

export const ContatoPage: React.FC<ContatoPageProps> = ({
        formInputs,
        contactInfo,
        itemSocialList,
    }) => {
    const isLargeScreen = useScreenSize(768);
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);

      const handleFormSubmit = () => {
        console.log(formData);
    };

    return (
        <>
        <Section padding={!isLargeScreen.isLargeScreen ? "120px 0 60px" : "120px 0"} background="var(--background-primary-variation)">
            <Container>
                <Row break={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={contactInfo.sectionTitle} color="var(--text-white)"/>
                    </Col>
                    <Col flex={6}>
                        <Content>
                            <Title>
                                <SectionTitle text={contactInfo.title} color="var(--text-white)"/>
                                <SectionBodyText  text={contactInfo.content} color="var(--text-white)"/>
                            </Title>
                        </Content>
                    </Col>
                    <Col flex={4}>
                        <SocialLinks>
                            {itemSocialList.map((item, index) => (
                                <Link key={index}><a href={item.href} target="_blank">{item.text}</a></Link>
                            ))}
                        </SocialLinks>
                    </Col>
                </Row>
                <Row break={!isLargeScreen.isLargeScreen} margin="20px 0 0">
                {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                    <Col flex={5} >
                        <ContainerForm>
                            <InputGenerate
                                leftInputs={formInputs}
                                formData={formData}
                                setFormData={setFormData}
                                color="var(--text-white)"
                                singleColumn={true}
                            />
                        </ContainerForm>
                        <ContainerActionForm>
                            <Mandatory color="var(--text-secondary)"/>
                            <CheckFormAccept color="var(--text-white)"  onAcceptChange={setAccept}/>
                                {accept ?
                                    <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                    :
                                    <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                }
                        </ContainerActionForm>
                    </Col>
                    <Col flex={5}>
                        <Maps
                            latI={-27.120616076517972}
                            lngI={-48.6081570743573}
                            zoomLevel={16}
                        />
                        <Local>R. 210 - Meia Praia, Itapema - Santa Catarina</Local>
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

const ContainerForm = styled.div`
    margin:-40px 0 0;
`;

const ContainerActionForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:2px 0 0;

    @media(max-width:768px){
        margin:0px 0 20px;
    }
`;


const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:10px;

    button {
        height:35px;
        width:90px;
        background-color:transparent;
        border:solid 1px var(--text-white);
        color:var(--text-white);
        text-transform:uppercase;
        cursor:pointer;
        border-radius:5px;

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

const SocialLinks = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    justify-content:flex-end;
    gap:20px;
    padding-bottom:50px;
`;

const Link = styled.a`
    color:var(--text-white);
    text-transform:uppercase;
    font-size:14px;
    text-decoration:underline;
    cursor:pointer;
`;

const Local = styled.div`
    color:var(--text-white);
    text-align:right;
    width:100%;
    font-size:12px;
    margin:30px 0 0;
`;