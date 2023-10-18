'use client'

import styled, { keyframes } from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import { BlogCard, BlogCardProps } from '../components/blogCard';

interface BlogProps {
    blogInfo:any;
    data:any;
    loading:boolean;
}

export const BlogPage: React.FC<BlogProps> = ({
        blogInfo,
        data,
        loading
    }) => {

    return (
        <BlogPageContainer id="get-more-items">
            {loading &&
              <SpinnerContainer>
                <Spinner></Spinner>
              </SpinnerContainer>
            }
            <Section className="section" background="var(--background-secondary)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={blogInfo.sectionTitle} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                            <BlogListContainer>
                                {data.map((page: any) =>
                                  page?.data.map((post:any, index:number) => (
                                    <BlogCard key={index} data={post} />
                                  ))
                                )}
                            </BlogListContainer>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </BlogPageContainer>
    )
}

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    height:100vh;
    width:100%;
    backdrop-filter: blur(2px);
    z-index:9;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    border: 4px solid var(--background-grey);
    border-top: 4px solid var(--background-primary);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;

SpinnerContainer.displayName = 'SpinnerContainer';
Spinner.displayName = 'Spinner';

const BlogPageContainer = styled.div`
  .section {
    padding:120px 0;
  }

  .break{
    @media(max-width:768px){
        flex-direction:column;
    }
  }
`;

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