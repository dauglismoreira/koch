'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionTitle } from '../components/sectionTitle';
import { SectionBodyText } from '../components/sectionBodyText';
import { SectionSubTitle } from '../components/sectionSubTitle';
import { useEffect, useState } from 'react';
import { InputGenerate, LocalFormData } from '../components/formGenerator';
import { Mandatory } from '../components/formGenerator/components/notice';
import { CheckFormAccept } from '../components/formGenerator/components/check';
import SvgComponent from '../components/SvgComponent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getData } from '@/helpers/getData';

interface SendWorkProps {
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

export const SendWorkPage: React.FC<SendWorkProps> = ({
        aboutInfo,
        formInputs,
        dataValidate,
        dataForm,
        data
    }) => {
    const [formData, setFormData] = useState<LocalFormData>({});
    const [accept, setAccept] = useState(false);
    const [inputs, setInputs] = useState([])

    const handleFormSubmit = () => {
        const combinedData = new FormData;

        combinedData.append('origin', 'trabalhe_conosco')
        // combinedData.append('department', dataForm?.email)
        combinedData.append('department', 'dauglisc@gmail.com')

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const value = formData[key];
                if (value instanceof File) {
                    combinedData.append(key, value);
                } else {
                    combinedData.append(key, String(value));
                }
            }
        }

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
                name: 'choose_area',
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
        <SendWorkSectionContainer>
            <Section position="relative" className="section" background="var(--background-secondary)">
                <Container>
                    <Row  className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-primary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={data && data.text} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row className="break">
                        <Col flex={2}></Col>
                        <Col flex={5}>
                            <Content>
                                <SectionBodyText text={data && data.long_text} color="var(--text-secondary)"/>
                                <InputGenerate
                                    leftInputs={inputs}
                                    formData={formData}
                                    setFormData={setFormData}
                                    color="var(--text-primary)"
                                    singleColumn={true}
                                />
                                <ActionContainer>
                                    <Mandatory color="var(--text-secondary)"/>
                                    <CheckFormAccept data={dataValidate} color="var(--text-primary)"  onAcceptChange={setAccept}/>
                                    {accept ?
                                        <ButtonContainer><button onClick={handleFormSubmit}>Enviar</button></ButtonContainer>
                                        :
                                        <ButtonContainer><button onClick={handleFormSubmit} disabled>Enviar</button></ButtonContainer>
                                    }
                                </ActionContainer>
                            
                            </Content>
                        </Col>
                        <Col flex={5}></Col>
                    </Row>
                </Container>
                <SvgContainer>
                    <SvgComponent className="sv3" color="var(--background-secondary)" border="var(--background-grey)"/>
                </SvgContainer>
            </Section>
        </SendWorkSectionContainer>
    )
}

const SendWorkSectionContainer = styled.div`

    .section{
        padding:120px 0 60px;

        @media(max-width:768px){
            padding:140px 0 40px;
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
        font-size:var(--desktop-text-size);
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;

        p {
            margin-top:0;
            padding:0;
            font-size:var(--mobile-text-size);
        }
    }
`;

const ActionContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:30px 0;

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