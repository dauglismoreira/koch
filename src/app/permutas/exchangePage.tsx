'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { useEffect, useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import { Mandatory } from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getData } from '@/helpers/getData';
import Dump from "@/impacte/Dump";

interface ExchangePageProps {
    aboutInfo:any;
    formInputsLeft:any;
    formInputsRight:any;
    data:any;
    dataForm:any;
    dataValidate:any;
}

interface FormInput {
    id:number;
    name:string;
    type:string;
    differentials:any;
}


export const ExchangePage: React.FC<ExchangePageProps> = ({
        aboutInfo,
        formInputsLeft,
        formInputsRight,
        dataValidate,
        dataForm,
        data
    }) => {
    const isLargeScreen = useScreenSize(768);
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);
    const [inputs, setInputs] = useState([])

      const handleFormSubmit = () => {
        const origin = {
            origin:'pagina_permutas',
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
/* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const novoObjeto = dataForm?.intentions.map((select: FormInput) => {
            if (!select.differentials.length) {
                return null
            }

            return {
                placeholder: select.name,
                name: select.id === 3 ? 'propose_type' : 'sales_proposal',
                type: "select",
                options: select.differentials.map((option: { label: string }) => {
                    return{
                        label: option.label,
                        value: option.label,
                    }
                }),
            };
        });
    
        setInputs(novoObjeto.concat(formInputsRight))
    }, []);
/* eslint-disable react-hooks/exhaustive-deps */
    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "140px 0 40px" : "120px 0 60px"} background="var(--background-secondary)">
                <Container>
                    <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-primary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={data && data.text} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
                        <Col flex={2}></Col>
                        <Col flex={10}>
                            <Content>
                                <SectionBodyText text={data && data.long_text} color="var(--text-secondary)"/>
                                <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'} reverse={'false'}>
                                    <Col flex={12}>
                                    <InputGenerate
                                        leftInputs={formInputsLeft}
                                        rightInputs={inputs}
                                        formData={formData}
                                        setFormData={setFormData}
                                        color="var(--text-primary)"
                                    />
                                    </Col>
                                </Row>
                                <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
                                    <Col flex={6} padding="15px 10px">
                                        <ActionFormContainer>
                                            <Mandatory color="var(--text-secondary)"/>
                                            <CheckFormAccept data={dataValidate} color="var(--text-primary)"  onAcceptChange={setAccept}/>
                                                {accept ?
                                                    <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                                    :
                                                    <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                                }
                                        </ActionFormContainer>
                                    </Col>
                                    <Col flex={6} padding="15px 10px"></Col>
                                </Row>                                
                            </Content>
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

    p {
        font-size:var(--desktop-text-size);
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;

        p {
            margin-top:0;
            padding:0 0;
            font-size:var(--mobile-text-size);
        }
    }
`;

const ActionFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:-120px 0 0 -10px;

    input::placeholder {
        color: var(--text-primary);
        text-transform:uppercase;
    }

    textarea::placeholder {
        color: var(--text-primary);
        text-transform:uppercase;
    }

    @media(max-width:768px){
        margin:-10px 0 0;
    }
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;

    button {
        height:35px;
        width:90px;
        background-color:transparent;
        border:solid 1px var(--text-primary);
        color:var(--text-primary);
        text-transform:uppercase;
        cursor:pointer;
        border-radius:5px;
        font-size:var(--buttons-size);
        font-weight:var(--buttons-weight);

        &:hover {
            background-color:var(--text-primary);
            color:var(--background-white);
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