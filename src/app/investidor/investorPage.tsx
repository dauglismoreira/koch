'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { useEffect, useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import {CheckFormAccept} from '../components/formGenerator/components/check';
import {Mandatory} from '../components/formGenerator/components/notice';
import SvgComponent from '../components/SvgComponent';
import { getData } from '@/helpers/getData';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface InvestorPageProps {
    aboutInfo:any;
    formInputs:any;
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

export const InvestorPage: React.FC<InvestorPageProps> = ({ data, dataForm, dataValidate, aboutInfo, formInputs}) => {
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);
    const [inputs, setInputs] = useState([])

    const handleFormSubmit = () => {
        const origin = {
            origin:'pagina_seja_um_investidor',
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
            return {
                placeholder: select.name,
                name: select.id === 1 ? 'profile_investor' : 'investment_type',
                type: "select",
                options: select.differentials.map((option: { label: string }) => {
                    return{
                        label: option.label,
                        value: option.label,
                    }
                }),
            };
        });
    
        setInputs(novoObjeto.concat(formInputs))
    }, []);
/* eslint-disable react-hooks/exhaustive-deps */
    return (
        <InvestorPageSectionContainer>
            <Section position='relative'className="section" background="var(--background-secondary-variation)">
                <Container>
                    <Row  className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={data && data.text} color="var(--text-white)"/>
                        </Col>
                    </Row>
                    <Row className="break">
                        <Col flex={2}></Col>
                        <Col flex={10}>
                            <Content>
                                <SectionBodyText text={data && data.long_text} color="var(--text-white)"/>
                                <InputGenerate
                                    dataForm={dataForm}
                                    leftInputs={inputs}
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
                                <CheckFormAccept data={dataValidate} color="var(--text-white)"  onAcceptChange={setAccept}/>
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
        padding:120px 0 80px;

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