'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import { ContainerButtons } from '../components/containerButtons';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionTitle } from '../components/sectionTitle';
import { BrokerCard, CardProps } from '../components/brokerCard';
import { useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import {Mandatory} from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';
import { ContactInfos } from '../components/contactInfos';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getData } from '@/helpers/getData';

interface ServicePageProps {
    opportunitiesButtons:any;
    oportunitiesInfo:any;
    contactInfo:any;
    formInfo:any;
    formInputsLeft:any;
    formInputsRight:any;
    data:any;
    collaborators?:any;
    email_origin?:string;
}

export const ServicePage: React.FC<ServicePageProps> = ({
        oportunitiesInfo,
        opportunitiesButtons,
        contactInfo,
        formInfo,
        formInputsLeft,
        formInputsRight,
        data,
        collaborators,
        email_origin
    }) => {
        
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);

    const handleFormSubmit = () => {
        const origin = {
            origin:'pagina_nosso_time',
            department: email_origin,
        }

        const combinedData = {
            ...formData,
            ...origin,
          };
        
          getData('contact-send', combinedData)
          .then(response => handleShowMessage(response))
    };

    const MessageForm = withReactContent(Swal)

    const handleShowMessage = (response:any) => {
        if(response.success){
            MessageForm.fire({
                icon: 'success',
                title: 'Mensagem enviada',
                text: 'Em breve entraremos em contato',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            MessageForm.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tivemos um problema, tente novamente mais tarde',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <ContainerServicePage>
        <Section className="section" background="var(--background-secondary)">
            <Container>
                <Row className="break-row">
                    <Col flex={2}>
                        <SectionSubTitle text={oportunitiesInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle text={data && data[0].title} color="var(--text-primary)"/>
                                <SectionBodyText  text={data && data[0].text} color="var(--text-secondary)"/>
                            </Title>
                            <ContainerButtons color="var(--text-white)" background="var(--text-primary)" buttonsList={opportunitiesButtons}/>
                        </Content>
                    </Col>
                </Row>
                <Row>
                    <Col className="mobile-no-available" flex={2}></Col>
                    <Col flex={10}>
                        <BrokersListContainer>
                            {collaborators && collaborators.map((broker : any, index : number) => (
                                <BrokerCard key={index} data={broker} />
                            ))}
                        </BrokersListContainer>
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row  className="break-row">
                    <Col flex={2}>
                        <SectionSubTitle text={contactInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle size="24px" text={data && data[1].title} color="var(--text-primary)"/>
                                <SectionBodyText  text={data && data[1].text} color="var(--text-secondary)"/>
                            </Title>
                        </Content>
                    </Col>
                </Row>
                <Row  className="break-row">
                    <Col flex={2}></Col>
                    <Col flex={4} className="info-container">
                        <ContactInfos
                            local={data && data[2]}
                            hour={data && data[3]}
                            phone={data && data[4]}
                            email={data && data[5]}
                        />
                    </Col>
                    <Col flex={6}>
                        <div dangerouslySetInnerHTML={{ __html: data && data[6].iframe }} />
                    </Col>
                </Row>
                <Row>
                    <LineDivider></LineDivider>
                </Row>
                <Row  className="break-row">
                    <Col flex={2}>
                        <SectionSubTitle text={formInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle size="24px" text={data && data[7].title} color="var(--text-primary)"/>
                                <SectionBodyText  text={data && data[7].text} color="var(--text-secondary)"/>
                            </Title>
                        </Content>
                    </Col>
                </Row>
                <Row  className="break-row">
                <Col  className="mobile-no-available"flex={2}></Col>
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
                <Col className="mobile-no-available" flex={2}></Col>
                    <Col flex={10}>
                        <ActionContainer>
                            <Mandatory color="var(--text-primary)"/>
                            <CheckFormAccept data={data[7]}  onAcceptChange={setAccept} color="var(--text-primary)"/>
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
        </ContainerServicePage>
    )
}

const ContainerServicePage = styled.div`
    .section {
        padding:120px 0;
    }

    .break-row{
        @media(max-width:768px){
            flex-direction:column;
        }
    }

    .mobile-no-available{
        @media(max-width:768px){
            display:none;
        }
    }

    @media(max-width:768px){
        .info-container{
            width:100%;
        }
    }
`;

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