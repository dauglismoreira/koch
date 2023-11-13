'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { SectionTitle } from '../components/sectionTitle';
import React, { useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import { Mandatory } from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';
import { getData } from '@/helpers/getData';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface SocialLinksProps {
    text:string;
    href:any;
}

interface ContatoPageProps {
    formInputs:any;
    contactInfo:any;
    data:any;
    dataForm:any;
    dataValidate:any;
    dataLocal:any;
    itemSocialList:SocialLinksProps[];
}

interface MapComponentProps {
    dataLocal: {
      iframe: string;
    };
  }

  const MapComponent: React.FC<MapComponentProps> = React.memo(({ dataLocal }) => (
    <Map>
      <div dangerouslySetInnerHTML={{ __html: dataLocal && dataLocal.iframe }} />
    </Map>
  ));

  MapComponent.displayName = 'MapComponent';

export const ContatoPage: React.FC<ContatoPageProps> = ({
        data,
        dataForm,
        dataValidate,
        formInputs,
        contactInfo,
        dataLocal,
        itemSocialList,
    }) => {
    const isLargeScreen = useScreenSize(768);
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);

      const handleFormSubmit = () => {
        const origin = {
            origin:'pagina_contato',
            department: dataForm?.email,
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
        <ContatoPageSectionContainer>
            <Section padding={!isLargeScreen.isLargeScreen ? "120px 10px 60px" : "120px 0 60px"} background="var(--background-primary-variation)">
                <Container>
                    <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
                        <Col flex={2}>
                            <SectionSubTitle text={contactInfo.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={7}>
                            <ContentContact>
                                <div>
                                    <SectionTitle text={data.text} color="var(--text-white)"/>
                                    {/* <SectionBodyText  text={contactInfo.content} color="var(--text-white)"/> */}
                                    <div dangerouslySetInnerHTML={{ __html: data && data.long_text }} />
                                </div>
                            </ContentContact>
                        </Col>
                        {isLargeScreen.isLargeScreen && <Col className="align-end" flex={3}>
                            <SocialLinks>
                                {itemSocialList.map((item, index) => (
                                    <Link key={index}><a href={item.href} target="_blank">{item.text}</a></Link>
                                ))}
                            </SocialLinks>
                        </Col>}
                    </Row>
                    <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'} margin="20px 0 0">
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
                                <Mandatory color="var(--text-white)"/>
                                <CheckFormAccept data={dataValidate} color="var(--text-white)"  onAcceptChange={setAccept}/>
                                    {accept ?
                                        <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                        :
                                        <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                    }
                            </ContainerActionForm>
                        </Col>
                        <Col flex={5}>
                            {dataLocal.iframe &&
                                <MapComponent dataLocal={dataLocal}/>
                            }
                            {dataLocal.text &&
                                <Local>{dataLocal && dataLocal.text}</Local>
                            }
                        </Col>
                        {!isLargeScreen.isLargeScreen && <Col flex={4}>
                            <SocialLinks>
                                {itemSocialList.map((item, index) => (
                                    <Link key={index}><a href={item.href} target="_blank">{item.text}</a></Link>
                                ))}
                            </SocialLinks>
                        </Col>}
                    </Row>
                </Container>
            </Section>
        </ContatoPageSectionContainer>
    )
}

const ContatoPageSectionContainer = styled.div`
    .align-end{
        justify-content:flex-end;
        display:flex;
    }
`;

const ContentContact = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    p{
        font-size:var(--desktop-text-size);
        font-weight:var(--desktop-text-weight);
        color:var(--text-white);
    }

    @media(max-width:768px){
        p {
            font-size:var(--mobile-text-size);
            font-weight:var(--mobile-text-weight);
        }
    }
`;

const ContainerForm = styled.div`
    margin:-40px 0 0;

    @media(max-width:768px){
        margin:-10px 0 0;
    }
`;

const ContainerActionForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:2px 0 0;

    @media(max-width:768px){
        margin:0px 10px 20px;
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

const SocialLinks = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
    gap:40px;
    padding-bottom:50px;

    @media(max-width:768px){
        padding:70px 0 0;
        justify-content:space-around;
    }
`;

const Link = styled.div`
    color:var(--text-white);
    text-transform:uppercase;
    font-size:var(--buttons-size);
    font-weight:var(--buttons-weight);
    cursor:pointer;
    
    a {
        position:relative;
    }

    & a::after {
        content:'';
        width:0%;
        height:1px;
        background-color:#fff;
        position:absolute;
        bottom:-5px;
        left:0;
        transition:0.3s;
      }
    
      & a:hover{    
        &::after {
            width:100%;
        }
      }

      @media(max-width:768px){
        text-decoration:underline;
    }
`;

const Local = styled.div`
    color:var(--text-white);
    text-align:right;
    width:100%;
    font-size:var(--small-text-size);
    font-weight:var(--small-text-weight);
    margin:30px 0 0;

    @media(max-width:768px){
        margin:30px 10px 0;
        width:calc(100% - 20px);
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