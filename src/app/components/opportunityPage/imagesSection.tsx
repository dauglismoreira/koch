import styled from 'styled-components';
import { Col, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { EnterpriseGalleryItem } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionSubTitle } from '../sectionSubTitle';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from '../../utils/Fancybox';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {useEffect} from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import getStorageFile from '@/helpers/getStorageFile';

interface OpportunityImagesSectionProps {
    data:EnterpriseGalleryItem[];
}

export const OpportunityImagesSection: React.FC<OpportunityImagesSectionProps> = ({
    data
}) => {
    const isLargeScreen = useScreenSize(768);
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

    return (
        <ImagesSection>
            <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
                <Col flex={2}>
                    <SectionSubTitle text={`Imagens\ndo empreendimento`} color="var(--text-secondary)"/>
                    <small>Clique para ampliar as imagens</small>
                </Col>
                <Col flex={10}>
                    {isLargeScreen.isLargeScreen ? <ImagesGrid>
                        {data && data.map((image, index) => (
                            <Fancybox
                                key={index}
                                options={{ infinite: false }}
                                href={getStorageFile(image.path)}
                                delegate="[data-fancybox='gallery']"
                            >
                                <img
                                    width={260}
                                    height={200}
                                    loading="eager" 
                                    data-fancybox="gallery"
                                    data-src={getStorageFile(image.path)}
                                    src={getStorageFile(image.path)}
                                    alt={image.alt}
                                />
                            </Fancybox>
                        ))}
                    </ImagesGrid>
                    :
                    <SwiperContainer width={isLargeScreen.width}>
                        <Swiper
                            slidesPerView={1}
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
                            {data && data.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Fancybox
                                        options={{ infinite: false }}
                                        href={getStorageFile(image.path)}
                                        delegate="[data-fancybox='gallery']"
                                    >
                                        <img
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
                    }
                </Col>
            </Row>
        </ImagesSection>
    )
}


const ImagesSection = styled.div`
    padding:100px 0;

    small {
        color:var(--text-secondary);
        font-size:var(--small-text-size);
        margin-top:15px;
        display:block;
    }

    @media(max-width:768px){
        padding:60px 0;

        small {
            text-align:center;
        }
    }
`;

const ImagesGrid = styled.div`
    display:grid;
    gap:20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    img {
        width:100%;
        object-fit:cover;
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
    width:${props => props.width - 10}px;

    & .swiper {
        padding-bottom:25px;
    }

    @media(max-width:768px){
        margin-left:7px;

        & img{
            width:calc(100% - 20px);
            height:auto;
        }
    }
`;