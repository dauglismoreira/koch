'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { BlogCard, BlogCardProps } from '../components/blogCard';

interface BlogProps {
    blogInfo:any;
    blog:BlogCardProps[];
}

export const BlogPage: React.FC<BlogProps> = ({
        blogInfo,
        blog
    }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
        <Section padding={!isLargeScreen.isLargeScreen ? "120px 0" : "120px 0"} background="var(--background-secondary)">
            <Container>
                <Row break={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={blogInfo.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <BlogListContainer>
                            {blog.map((post, index) => (
                                <BlogCard data={post} />
                            ))}
                        </BlogListContainer>
                    </Col>
                </Row>
            </Container>
        </Section>
        </>
    )
}

const BlogListContainer = styled.div`
  width:100%;
  margin:0 0;
  display: grid;
  gap:10px;
  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width:1240) and (min-width:768px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:768px){
    grid-template-columns: 1fr;
    padding:0 0px;
    margin:30px 0;
  }
`;