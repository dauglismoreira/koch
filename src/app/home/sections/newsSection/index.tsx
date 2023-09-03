'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
import useScreenSize from '../../../../hooks/useScreenSize';
import { MoreButton } from '../../../components/moreButton';
import { NewsTitleSection } from './components/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlogCard, BlogCardProps } from '../../../components/blogCard';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

interface NewsSectionProps {
    data?:BlogCardProps[];
    info?: {
        sectionTitle: string;
        title: string;
        cta: string;
        link: string;
      };
}

export const NewsSection: React.FC<NewsSectionProps> = ({ data, info }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <Section padding={!isLargeScreen.isLargeScreen ? "40px 0" : "120px 0"} background="var(--background-secondary)">
            <Container>
                <NewsTitleSection info={info}/>
                <Row padding="50px 0">
                    <Col flex={2}></Col>
                    <SwiperContainer>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            // centeredSlides={true}
                            breakpoints={{
                                300: {
                                slidesPerView: 'auto',
                                spaceBetween: 20,
                                },
                                768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                },
                            }}
                            pagination={{
                            dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="gridSwiper"
                        >
                            {data && data.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <BlogCard data={card} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperContainer>
                </Row>
                <Row margin="30px 0 0">
                    {!isLargeScreen.isLargeScreen &&
                        <Col flex={12}>
                            <MoreButton cta={info && info.cta} link={info && info.link}/>
                        </Col>
                    }
                </Row>
            </Container>
        </Section>
    );
}

const SwiperContainer = styled.div`
    display:block;
    width:100%;
    max-width:83%;

    & .swiper {
        padding-bottom:35px;
    }

    & .swiper-pagination {
        width:50px!important;
    }

    & .swiper-pagination-bullet-active{
        background-color:var(--text-primary);
    }

    @media(max-width:768px){
        max-width:100%;
        margin-top:-40px;
    }
`;