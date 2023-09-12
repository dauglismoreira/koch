'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../../components/grid";
import { SectionTitle } from '../../components/sectionTitle';
import { SectionSubTitle } from '../../components/sectionSubTitle';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { RecommendedPosts } from '@/app/components/recomendedPosts';

interface PostPageProps {
    post:any;
}

export const PostPage: React.FC<PostPageProps> = ({post}) => {

    return (
        <PostPageContainer>
            <Section className="section" background="var(--background-secondary)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text="blog" color="var(--text-primary)"/>
                        </Col>
                        <Col flex={10}>
                            <SectionTitle text={post && post.title} color="var(--text-primary)"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="no-mobile-available" flex={2}></Col>
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
                        <Col className="no-mobile-available" flex={2}>
                            <RecommendedPosts data={post.related_posts}/>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </PostPageContainer>
    )
}

const PostPageContainer = styled.div`
    .section {
        padding:120px 0;

        @media(max-width:768px){
            padding: 140px 0 40px;
        }
    }

    .break{
        @media(max-width:768px){
            flex-direction:column;
        }
    }

    .no-mobile-available{
        @media(max-width:768px){
            display:none;
        }
    }
`;

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
    margin:28px auto 48px;
    color:var(--text-secondary);
    font-size:var(--small-text-size);
`;

const Body = styled.div`
    padding-left:10px;
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
        font-size:var(desktop-text-size);
        margin:10px 0;
    }

    @media(max-width:768px){
        p {
            font-size:var(mobile-text-size);
        }
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
    a {
        display:flex;
        align-items:center;
        color:var(--text-primary);
        gap:8px;
        cursor:pointer;
        transition:0.2s;
        font-size:var(--buttons-size);
        font-weight:var(--buttons-weight);
    }

    &:hover {
        transform:scale(1.05);
    }
`;

const Prev = styled.div`
    a {
        display:flex;
        align-items:center;
        color:var(--text-primary);
        gap:8px;
        cursor:pointer;
        transition:0.2s;
        font-size:var(--buttons-size);
        font-weight:var(--buttons-weight);
    }

    &:hover {
        transform:scale(1.05);
    }
`;