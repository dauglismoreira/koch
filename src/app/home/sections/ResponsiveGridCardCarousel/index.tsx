'use client'

import { Col, Container, Row, Section } from '../../../components/grid';
import { GridCarouselTitle } from './components/title';
import { GridCardCarousel } from './components/gridCarousel';
import { CardProps } from '../../../components/enterpriseCard';
import useScreenSize from '../../../../hooks/useScreenSize';
import { MoreButton } from '../../../components/moreButton';

interface BannerProps {
    data:CardProps[];
    info:{
        subTitle:string;
        title:string;
        cta:string;
        link:string;
    };
}

export const ResponsiveGridCardCarousel: React.FC<BannerProps> = ({ data, info }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <Section padding={!isLargeScreen.isLargeScreen ? "40px 0" : "80px 0"} background="var(--background-secondary)">
            <Container>
                <GridCarouselTitle info={info}/>
                <GridCardCarousel data={data}/>
                {!isLargeScreen.isLargeScreen &&
                    <Row>
                        <Col flex={12}>
                            <MoreButton cta={info && info.cta} link={info && info.link}/>
                        </Col>
                    </Row>
                }
            </Container>
        </Section>
    );
}