'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../../components/grid";
import { SectionTitle } from '../../components/sectionTitle';
import { SectionSubTitle } from '../../components/sectionSubTitle';
import useScreenSize from '../../../hooks/useScreenSize';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { RecommendedPosts } from '@/app/components/recomendedPosts';

interface PostPageProps {
    post:any;
}

export const PostPage: React.FC<PostPageProps> = ({post}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "140px 0 40px" : "120px 0"} background="var(--background-secondary)">
                <Container>
                    <Row breakpoint={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}>
                            <SectionSubTitle text="blog" color="var(--text-primary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={post && post.title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        {isLargeScreen.isLargeScreen && <Col flex={2}></Col>}
                        <Col flex={8}>
                            <Body>
                                <Date>{post.date}</Date>
                                <Cover background={post.image}></Cover>
                                <Content>{post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}</Content>
                                <LineDivider></LineDivider>
                                <ContainerNavigation>
                                    <Prev><a href={post.next_post} target="_parent"><BsArrowLeft/>Anterior</a></Prev>
                                    <Next><a href={post.prev_post} target="_parent">Próximo<BsArrowRight/></a></Next>
                                </ContainerNavigation>
                            </Body>
                        </Col>
                        {isLargeScreen.isLargeScreen && <Col flex={2}>
                            <RecommendedPosts data={post.related_posts}/>
                        </Col>}
                    </Row>
                </Container>
            </Section>
            </>
    )
}

const Cover = styled.div<{background : string}>`
    background-image:url('${props => props.background}');
    background-position:center center;
    background-size:cover;
    width:100%;
    height:470px;
    margin:30px auto;

    @media(max-width:768px){
        height:270px;
    }
`;

const Date = styled.div`
    margin:30px auto;
    color:var(--text-secondary);
    font-size:0.9rem;
`;

const Body = styled.div`

`;

const Content = styled.div`
    margin:auto;

    img{
        max-width:100%;
        margin:15px 0;
    }

    p {
        color:var(--text-secondary);
        line-height:1.4;
        font-size:14px;
        margin:10px 0;
    }
`;

const LineDivider = styled.div`
    width:100%;
    height:1px;
    background-color:var(--border-grey);
    margin:50px 0;
`;

const ContainerNavigation = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const Next = styled.div`
    display:flex;
    align-items:center;
    color:var(--text-primary);
    gap:8px;
    cursor:pointer;
    transition:0.2s;

    &:hover {
        transform:scale(1.05);
    }
`;

const Prev = styled.div`
    display:flex;
    align-items:center;
    color:var(--text-primary);
    gap:8px;
    cursor:pointer;
    transition:0.2s;

    &:hover {
        transform:scale(1.05);
    }
`;