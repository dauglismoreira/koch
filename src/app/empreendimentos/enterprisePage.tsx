'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { CardProps, EnterpriseCard } from '../components/enterpriseCard';
import { EnterpriseFilters } from '../components/catalogFilters';

interface EnterprisePageProps {
    situationOptions:any;
    aboutInfo:any;
    citiesOptions:any;
    enterprises:CardProps[];
}

export const EnterprisePage: React.FC<EnterprisePageProps> = ({ situationOptions, aboutInfo, citiesOptions, enterprises}) => {
    const isLargeScreen = useScreenSize(768);
    
    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "120px 0 40px" : "160px 0"} background="var(--background-secondary)">
                <Container>
                    <Row breakpoint={!isLargeScreen.isLargeScreen}>
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                           <EnterpriseFilters
                                citiesOptions={citiesOptions}
                                situationOptions={situationOptions}
                                onCityChange={(selectedValue) => {
                                    console.log(selectedValue);
                                }}
                                onSituationChange={(selectedValue) => {
                                    console.log(selectedValue);
                                }}
                                onSearchChange={(textValue) => {
                                    console.log(textValue);
                                }}
                           />
                        </Col>
                    </Row>
                    <Row>
                        <EnterpriseListContainer>
                            {enterprises.map((enterprise, index) => (
                                <EnterpriseCard key={index} data={enterprise} />
                            ))}
                        </EnterpriseListContainer>
                    </Row>
                </Container>
            </Section>
            </>
    )
}



const EnterpriseListContainer = styled.div`
  width:100%;
  margin:80px 0;
  display: grid;
  gap:30px;
  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width:1240) and (min-width:768px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
    margin:30px 0;
  }
`;