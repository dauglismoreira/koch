'use client';

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
import useScreenSize from '../../../../hooks/useScreenSize';
import { Accordion, AccordionItemProps } from '../../../components/accordion';
import { SectionSubTitle } from '../../../components/sectionSubTitle';
import { SectionTitle } from '../../../components/sectionTitle';
import { SectionBodyText } from '../../../components/sectionBodyText';

interface AboutProps {
    accordionDate?:AccordionItemProps[];
    info?: {
        sectionTitle: string;
        title: string;
        content: string;
        link: string;
      };
}

export const AboutSection: React.FC<AboutProps> = ({ accordionDate, info }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <Section padding={!isLargeScreen.isLargeScreen ? "40px 0" : "120px 0"} background="var(--background-primary)">
            <Container>
                <Row break={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={info && info.sectionTitle} color="var(--text-white)"/>
                    </Col>
                    <Col flex={4}>
                        <Content>
                            <Title>
                                <SectionTitle text={info && info.title} color="var(--text-white)"/>
                                <SectionBodyText text={info && info.content} color="var(--text-white)"/>
                            </Title>
                            <Link href={info && `./../${info.link}`} target="_parent">
                                Leia mais
                            </Link>
                        </Content>
                    </Col>
                    <Col flex={1}></Col>
                    <Col flex={5}>
                        <Accordion data={accordionDate}/>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

const Content = styled.a`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.a`

`;

const Link = styled.a`
    color:var(--text-white);
    text-transform:uppercase;
    font-size:14px;
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
      font-weight:500;
      
      &::after {
          width:100%;
      }
    }

    @media(max-width:768px){
        display:none;
    }
`;