import styled from 'styled-components';
import { Col, Row } from "../grid";
import { Progress } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionSubTitle } from '../sectionSubTitle';
import { ProgressBar } from '../progressBar';
import { useState } from 'react';
import {VideoPlayer} from '../videoPlayer';

interface EnterProgressSectionProps {
    data:Progress;
}

export const EnterProgressSection: React.FC<EnterProgressSectionProps> = ({
    data
}) => {

    const buttons = [
        {
            label:'Fotos'
        },
        {
            label:'Vídeos'
        }
    ]

    const [selectedButton, setSelectedButton] = useState(1)

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };

    return (
        <ProgressSection>
            <Row className="section">
                <Col flex={2}>
                    <SectionSubTitle text={`Acompanhamento\nde obra`} color="var(--text-secondary)"/>
                    <ContainerButton>
                        {buttons.map((button, index) => (
                            <Button key={index}
                                onClick={() => handleClick(index)}
                                className={index === selectedButton ? 'selected' : ''}
                            >{button.label}</Button>
                        ))}
                    </ContainerButton>
                </Col>
                <Col flex={6}>
                    <VideoPlayer videoSource={data.video} />
                </Col>
                <Col flex={4}>
                    <Start>Início da obra: <span>{data.start}</span></Start>
                    <Forecast>Entrega prevista da obra: <span>{data.forecast}</span></Forecast>
                    <ProgressBar label="Fundação" progress={data.foundation}/>
                    <ProgressBar label="Estrutura" progress={data.structure}/>
                    <ProgressBar label="Alvenarias" progress={data.masonry}/>
                    <ProgressBar label="Reboco" progress={data.plaster}/>
                </Col>
            </Row>
        </ProgressSection>
    )
}


const ContainerButton = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    border:none;
    margin:20px 0 0;
    background-color:var(--background-secondary);

    @media(max-width:768px){
        flex-direction:row;
        flex-wrap:wrap;
        padding:0 10px;
    }
`;

const Button = styled.button`
    border:solid 1px var(--background-primary);
    color:var(--text-primary);
    border-radius:6px;
    height:30px;
    cursor:pointer;
    padding: 0 15px;
    text-transform:uppercase;
    font-weight:var(--buttons-weight);
    font-size:var(--buttons-size);
    transition:0.2s;

    &:hover{
        background-color:var(--background-primary);
        color:var(--text-white);
    }

    &.selected {
        background-color: var(--background-primary);
        color: var(--text-white);
    }

    @media(max-width:768px){
        flex:1;
    }
`;

const ProgressSection = styled.div`
    padding:140px 0;

    @media(max-width:768px){
        padding:70px 0;
    }

    .section{
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

const Start = styled.div`
    color:var(--text-secondary);
    font-weight:var(--medium-title-weight);
    font-size:var(--small-title-size);

    span{
        font-weight:var(--small-title-weight);
    }

    @media(max-width:768px){
        padding:0 10px;
    }
`;

const Forecast = styled.div`
    color:var(--text-secondary);
    font-weight:var(--medium-title-weight);
    font-size:var(--small-title-size);

    span{
        font-weight:var(--small-title-weight);
    }
    @media(max-width:768px){
        padding:0 10px;
    }
`;
