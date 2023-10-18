import styled from 'styled-components';
import { Col, Row } from "../grid";
import { Progress } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionSubTitle } from '../sectionSubTitle';
import { ProgressBar } from '../progressBar';
import {VideoPlayer} from '../videoPlayer';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from '../../utils/Fancybox';
import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import useScreenSize from '@/hooks/useScreenSize';

import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import getStorageFile from '@/helpers/getStorageFile';

interface EnterProgressSectionProps {
    prog?:{
        name?:string;
        progress?:number;
    }[];
    videos?:any;
    images?:any;
    begin_date?:string;
    end_date?:string;
}

export const EnterProgressSection: React.FC<EnterProgressSectionProps> = ({
    prog, videos, end_date, begin_date, images
}) => {

    const isLargeScreen = useScreenSize(768);

    const buttons = [
        {
            label:'Fotos'
        },
        {
            label:'Vídeos'
        }
    ]

    const [selectedButton, setSelectedButton] = useState(0)
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

    const handleClick = (index: number) => {
        setSelectedButton(index);
    };


    return (
        <ProgressSection>
            <Row className="section">
                <Col flex={2}>
                    <SectionSubTitle text={`Acompanhamento\nde obra`} color="var(--text-secondary)"/>
                    <ContainerButton>
                        {images && (
                            <Button
                                onClick={() => handleClick(0)}
                                className={selectedButton === 0 ? 'selected' : ''}
                            >
                                Fotos
                            </Button>
                        )}
                        {videos && (
                            <Button
                                onClick={() => handleClick(1)}
                                className={selectedButton === 1 ? 'selected' : ''}
                            >
                                Vídeos
                            </Button>
                        )}
                    </ContainerButton>
                </Col>
                <Col flex={6}>
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
                            {selectedButton === 0 ?
                                images && images.map((image:any, index:any) => (
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
                                ))
                                :
                                videos && videos.map((video:any, index:any) => (
                                    <SwiperSlide key={index}>
                                        <ContainerVideo>
                                            <div dangerouslySetInnerHTML={{ __html: video.iframe }} />
                                        </ContainerVideo>
                                    </SwiperSlide>
                                ))
                            }

                            <CustomNavButton onClick={handlePrevClick} className="custom-prev-button"><BsArrowLeft/></CustomNavButton>
                            <CustomNavButton onClick={handleNextClick} className="custom-next-button"><BsArrowRight/></CustomNavButton>
                        </Swiper>
                    </SwiperContainer>
                </Col>
                <Col flex={4}>
                    {begin_date && <Start>Início da obra: <span>{begin_date}</span></Start>}
                    {end_date && <Forecast>Entrega prevista da obra: <span>{end_date}</span></Forecast>}
                    {prog && prog?.map((prog, index) => (
                        <ProgressBar key={index} label={prog && prog.name} progress={prog && prog.progress}/>
                    ))}
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
    padding:100px 0 60px;

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

const ContainerVideo = styled.div`
iframe{
    width:97%;
    height: 420px;

    @media screen and (max-width: 799px) {
        height:220px;
    }
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