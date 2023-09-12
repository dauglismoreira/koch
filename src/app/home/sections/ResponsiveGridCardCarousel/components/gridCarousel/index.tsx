import { Row } from '../../../../../components/grid';
import { styled } from 'styled-components';
import { EnterpriseCard } from '../../../../../components/enterpriseCard';
import { CardProps } from '../../../../../components/enterpriseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import useScreenSize from '../../../../../../hooks/useScreenSize';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

interface GridProps {
    data: CardProps[];
}

export const GridCardCarousel: React.FC<GridProps> = ({ data }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <Row margin={!isLargeScreen.isLargeScreen ? "10px 0 60px" : "80px 0 120px"} padding="0 20px">
            <SwiperContainer>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                        300: {
                        slidesPerView: 1,
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
                            <EnterpriseCard data={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </Row>
    );
}


const SwiperContainer = styled.div`
    display:block;
    width:100%;

    & .swiper {
        padding-bottom:35px;
    }

    & .swiper-pagination {
        width:50px!important;
    }

    & .swiper-pagination-bullet-active{
        background-color:var(--text-primary);
    }
`;