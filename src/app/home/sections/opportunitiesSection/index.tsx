'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from '../../../components/grid';
import useScreenSize from '../../../../hooks/useScreenSize';
import { SectionSubTitle } from '../../../components/sectionSubTitle';
import { SectionTitle } from '../../../components/sectionTitle';
import { SectionBodyText } from '../../../components/sectionBodyText';
import { ButtonsProps, ContainerButtons } from '../../../components/containerButtons';

interface OpportunitiesProps {
    buttonsList?:ButtonsProps[];
    info?: {
        sectionTitle: string;
        title: string;
        content: string;
      };
}

export const OpportunitiesSection: React.FC<OpportunitiesProps> = ({ buttonsList, info }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <Section padding={!isLargeScreen.isLargeScreen ? "48px 0" : "120px 0"} background="var(--background-secondary)">
            <Container>
                <Row breakpoint={!isLargeScreen.isLargeScreen}>
                    <Col flex={2}>
                        <SectionSubTitle text={info && info.sectionTitle} color="var(--text-secondary)"/>
                    </Col>
                    <Col flex={10}>
                        <Content>
                            <Title>
                                <SectionTitle text={info && info.title} color="var(--text-primary)"/>
                                <SectionBodyText  text={info && info.content} color="var(--text-secondary)"/>
                            </Title>
                            <ContainerButtons color="var(--text-white)" background="var(--text-primary)" buttonsList={buttonsList}/>
                        </Content>
                    </Col>
                </Row>
            </Container>
            {!isLargeScreen.isLargeScreen && <LineDivider></LineDivider>}
        </Section>
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

const LineDivider = styled.div`
    background-color:var(--background-secondary);
    margin:48px auto -48px;
    height:1px;
    width:calc(100% - 20px);
    background-color:var(--border-grey);
`;