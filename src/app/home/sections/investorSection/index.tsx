'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
import useScreenSize from '../../../../hooks/useScreenSize';
import { SectionSubTitle } from '../../../components/sectionSubTitle';
import { SectionTitle } from '../../../components/sectionTitle';
import { SectionBodyText } from '../../../components/sectionBodyText';
import { ButtonsProps, ContainerButtons } from '../../../components/containerButtons';

interface InvestorSection {
    buttonsList?:ButtonsProps[];
    info?: {
        sectionTitle: string;
        title: string;
        content: string;
      };
}

export const InvestorSection: React.FC<InvestorSection> = ({ buttonsList, info }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
        {isLargeScreen?.isLargeScreen &&
            <Section padding={!isLargeScreen.isLargeScreen ? "40px 0" : "120px 0"} background="var(--background-grey)">
                <Container>
                    <Row break={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}>
                            <SectionSubTitle text={info && info.sectionTitle} color="var(--text-white)"/>
                        </Col>
                        <Col flex={10}>
                            <Content>
                                <Title>
                                    <SectionTitle text={info && info.title} color="var(--text-white)"/>
                                    <SectionBodyText  text={info && info.content} color="var(--text-white)"/>
                                </Title>
                                <ContainerButtons background="var(--text-white)" color="var(--background-grey)" buttonsList={buttonsList}/>
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Section>
        }
        </>
    );
}

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.div`

`;