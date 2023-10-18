import styled from 'styled-components';
import { Col, Container, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { Plan } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionSubTitle } from '../sectionSubTitle';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from '../../utils/Fancybox';
import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import getStorageFile from '@/helpers/getStorageFile';

interface EnterPlansSectionProps {
    plans:any[];
}

export const EnterPlansSection: React.FC<EnterPlansSectionProps> = ({
    plans
}) => {
    const isLargeScreen = useScreenSize(768);
    const [selectedPlan, setSelectedPlan] = useState(0)
    const [effectControl, setEffectControl] = useState(true)

    const swiper = useSwiper();

    useEffect(() => {
        NativeFancybox.bind("[data-fancybox='gallery']", {});
        
        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    const handlePrevClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePlanClick = (index: number) => {
        setSelectedPlan(index);
        setEffectControl(false);
        setTimeout(() => {
            setEffectControl(true);
        }, 400);
    };


    return (
        <PlansSection>
            <Container>
            <Row breakpoint={!isLargeScreen.isLargeScreen}>
                <Col flex={2}>
                    <SectionSubTitle text={`Plantas do\nempreendimento`} color="var(--text-secondary)"/>
                    <ContainerButton width={isLargeScreen.width}>
                        {plans?.map((plan, index) => (
                            <Button key={index}
                                onClick={() => handlePlanClick(index)}
                                className={index === selectedPlan ? 'selected' : ''}
                            >{plan.name}</Button>
                        ))}
                    </ContainerButton>
                </Col>
                <Col flex={6}>
                    {/* <PlanImage className={!effectControl ? 'hidden' : ''} image={plans[selectedPlan].image}></PlanImage> */}
                
                    <SwiperContainer width={isLargeScreen.width} className={!effectControl ? 'hidden' : ''}>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={20}
                            centeredSlides={true}
                            loop={true}
                            navigation={{
                                prevEl: '.custom-prev-button',
                                nextEl: '.custom-next-button',
                            }}
                            modules={[Navigation, Mousewheel, Keyboard]}
                            className="enterpriseSwiper"
                        >
                            {plans && plans[selectedPlan].galleries[1].files.map((image:any, index:any) => (
                                <SwiperSlide key={index}>
                                    <Fancybox
                                        options={{ infinite: false }}
                                        href={getStorageFile(image.path)}
                                        delegate="[data-fancybox='gallery']"
                                    >
                                        <Image
                                            width={260}
                                            height={200}
                                            loading="eager" 
                                            data-fancybox="gallery"
                                            data-src={getStorageFile(image.path)}
                                            src={getStorageFile(image.path)}
                                            alt={image.alt}
                                        />
                                    </Fancybox>
                                </SwiperSlide>
                            ))}
                            <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><BsArrowLeft/></CustomNavButton>
                            <CustomNavButton onClick={handleNextClick} className="custom-next-button"><BsArrowRight/></CustomNavButton>
                        </Swiper>
                    </SwiperContainer>
                
                </Col>
                <Col flex={4}>
                    {isLargeScreen.isLargeScreen && <h3>Características do Ambiente</h3>}
                    <SkillsGrid className={!effectControl ? 'hidden' : ''}>
                        {plans[selectedPlan].galleries[1].differentials.map((item : any, index : number) => (
                            <p key={index}>{item.label}</p>
                        ))}
                    </SkillsGrid>
                </Col>
            </Row>
            </Container>
        </PlansSection>
    )
}


const PlansSection = styled.div`
    padding:100px 0 120px;
    width:100%;

    h3 {
        text-transform:uppercase;
        font-size:var(--small-title-size);
        color:var(--text-secondary);
        font-weight:var(--small-title-weight);
    }

    @media(max-width:768px){
        padding:70px 10px;
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
        font-size:var(--small-text-size);
    }

    @media(max-width:768px){
        margin:10px 0;
        gap:20px;
    }
`;

const ContainerButton = styled.div<{width: number}>`
    display:inline-flex;
    flex-direction:column;
    gap:10px;
    border:none;
    margin:20px 0 0;
    background-color:var(--background-secondary);

    @media(max-width:768px){
        flex-direction:row;
        overflow:auto;
        padding:10px 0;
        width: ${props => props.width - 40}px;
    }

    & ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
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
    transition: 0.2s opacity;

    &:hover{
        background-color:var(--background-primary);
        color:var(--text-white);
    }

    &.selected {
        background-color: var(--background-primary);
        color: var(--text-white);
    }

    @media(max-width:768px){
        white-space:nowrap;
        width:auto;
        height:30px;
    }
`;

const CustomNavButton = styled.div`
    color: var(--text-primary);
    font-size: 24px;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    z-index:99;
    position: absolute;
    bottom: -30px;
    transform: translateY(-50%);

    &.custom-next-button{
        right:10px;
    }

    &.custom-prev-button{
        left:-10px;
    }

    @media(max-width:768px){
        width:40px;
        height:40px;
        opacity:0.8;
    }
`;


const SwiperContainer = styled.div<{width: number}>`
    display:block;
    width:100%;
    height:470px;
    opacity: 1;
    transition: opacity 0.3s ease;

    &.hidden {
        opacity: 0;
    }

    & .swiper {
        padding-bottom:25px;
    }

    & img{
        width:calc(100% - 20px);
        height:470px;
        object-fit:cover;
    }

    @media(max-width:768px){
        height:270px;
        margin-left:7px;

        & img{
            width:calc(100% - 20px);
            height:240px;
            object-fit:cover;
        }
    }
`;