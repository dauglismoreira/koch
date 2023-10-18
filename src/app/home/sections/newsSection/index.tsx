'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
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

    return (
        data && data.length > 0 &&
        <NewsSectionContainer>
        <Section className="section" background="var(--background-secondary)">
            <Container>
                <NewsTitleSection info={info}/>
                <Row padding="50px 0 50px 10px">
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
                    <Col className="no-desktop-available" flex={12}>
                        <MoreButton cta={info && info.cta} link={info && info.link}/>
                    </Col>
                </Row>
            </Container>
        </Section>
        </NewsSectionContainer>
    );
}

const NewsSectionContainer = styled.div`

    .section{
        padding:120px 0 20px;

        @media(max-width:768px){
            padding:48px 0;
        }
    }

    .no-desktop-available {
        @media(min-width:768px){
            display:none;
        }
    }
`;

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