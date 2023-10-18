'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
import { Accordion, AccordionItemProps } from '../../../components/accordion';
import { SectionSubTitle } from '../../../components/sectionSubTitle';
import { SectionTitle } from '../../../components/sectionTitle';
import { SectionBodyText } from '../../../components/sectionBodyText';
import SvgComponent from './../../../components/SvgComponent';

interface AboutProps {
    info?: {
        sectionTitle: string;
        link: string;
      };
    data: {
        title: string;
        long_text: string;
        differentials:AccordionItemProps[];
      };
}

export const AboutSection: React.FC<AboutProps> = ({ info, data }) => {

    return (
        data.title !== '' &&
        <AboutSectionContainer>
            <Section position="relative" className="section" background="var(--background-primary-variation)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={info && info.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={4}>
                            <Content>
                                <Title>
                                    <SectionTitle text={data && data.title} color="var(--text-white)"/>
                                    <SectionBodyText text={data && data.long_text} color="var(--text-white)"/>
                                </Title>
                                <Link href={info && `./../${info.link}`} target="_parent">
                                    Leia mais
                                </Link>
                            </Content>
                        </Col>
                        <Col flex={1}></Col>
                        <Col flex={5}>
                            {data.differentials.length > 0 &&
                                <Accordion data={data.differentials}/>
                            }
                        </Col>
                    </Row>
                </Container>
                <SvgContainer>
                    <SvgComponent className="sv1" color="#182842" border="#182842"/>
                </SvgContainer>
            </Section>
        </AboutSectionContainer>
    );
}

const AboutSectionContainer = styled.div`
    .section {
        padding:120px 0;

        @media(max-width:768px){
            padding:64px 0;
        }
    }

    .break{
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.div`

`;

const Link = styled.a`
    color:var(--text-white);
    text-transform:uppercase;
    font-size:var(--buttons-size);
    position:relative;
    cursor:pointer;
    width:70px;

    &::after {
      content:'';
      width:0%;
      height:1px;
      background-color:#fff;
      position:absolute;
      bottom:-5px;
      left:0px;
      transition:0.3s;
    }
  
    &:hover{
      font-weight:600;
      
      &::after {
          width:100%;
      }
    }

    @media(max-width:768px){
        display:none;
    }
`;

const SvgContainer = styled.div`
    position:absolute;
    top:-100px;
    bottom:0;
    right:0;
    z-index:-1;
    width:1100px;

    @media(max-width:768px){
        width:800px;
        left:100px;
    }
`;