import styled from 'styled-components';
import { Col, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { Plan } from '@/app/empreendimento/[slug]/enterPage';
import { SectionSubTitle } from '../sectionSubTitle';
import {useState} from 'react';

interface EnterPlansSectionProps {
    plans:Plan[];
}

export const EnterPlansSection: React.FC<EnterPlansSectionProps> = ({
    plans
}) => {
    const isLargeScreen = useScreenSize(768);
    const [selectedPlan, setSelectedPlan] = useState(0)
    const [effectControl, setEffectControl] = useState(true)

    const handlePlanClick = (index: number) => {
        setSelectedPlan(index);
        setEffectControl(false);
        setTimeout(() => {
            setEffectControl(true);
        }, 400);
    };

    return (
        <PlansSection>
            <Row break={!isLargeScreen.isLargeScreen}>
                <Col flex={2}>
                    <SectionSubTitle text={`Plantas do\nempreendimento`} color="var(--text-secondary)"/>
                    <ContainerButton>
                        {plans.map((plan, index) => (
                            <Button key={index}
                                onClick={() => handlePlanClick(index)}
                                className={index === selectedPlan ? 'selected' : ''}
                            >{plan.name}</Button>
                        ))}
                    </ContainerButton>
                </Col>
                <Col flex={6}>
                    <PlanImage className={!effectControl ? 'hidden' : ''} image={plans[selectedPlan].image}></PlanImage>
                </Col>
                <Col flex={4}>
                    <h3>Características do Ambiente</h3>
                    <SkillsGrid className={!effectControl ? 'hidden' : ''}>
                        {plans[selectedPlan].skill.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </SkillsGrid>
                </Col>
            </Row>
        </PlansSection>
    )
}


const PlansSection = styled.div`
    padding:140px 0;

    h3 {
        text-transform:uppercase;
        font-size:13px;
        color:var(--text-secondary);
        font-weight:400;
    }
`;

const PlanImage = styled.div<{image: string}>`
    width:90%;
    height:470px;
    background-image:url('${props => props.image}');
    background-position: center center;
    background-size:cover;
    transition: opacity 0.3s ease;
    opacity: 1;

    &.hidden {
        opacity: 0;
    }

    @media(max-width: 768px){
        width:calc(100% - 20px);
        height:455px;
    }
`;

const SkillsGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
    margin:30px 0 0;
    transition: opacity 0.3s ease;
    opacity: 1;

    &.hidden {
        opacity: 0;
    }

    p {
        color:var(--text-secondary);
        font-size:13px;
    }
`;

const ContainerButton = styled.button`
    display:flex;
    flex-direction:column;
    gap:10px;
    border:none;
    margin:20px 0 0;
    background-color:var(--background-secondary);
`;

const Button = styled.button`
    border:solid 1px var(--background-primary);
    color:var(--text-primary);
    border-radius:6px;
    height:30px;
    cursor:pointer;
    padding: 0 15px;
    text-transform:uppercase;
    font-weight:600;
    transition: 0.2s opacity;

    &:hover{
        background-color:var(--background-primary);
        color:var(--text-white);
    }

    &.selected {
        background-color: var(--background-primary);
        color: var(--text-white);
    }
`;