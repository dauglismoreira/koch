'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import { CardProps, EnterpriseCard } from '../components/enterpriseCard';
import { EnterpriseFilters } from '../components/catalogFilters';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface EnterprisePageProps {
    situationOptions:any;
    aboutInfo:any;
    citiesOptions:any;
    enterprises:CardProps[];
}

export const EnterprisePage: React.FC<EnterprisePageProps> = ({ situationOptions, aboutInfo, citiesOptions, enterprises}) => {

    const [textFilter, setTextFilter] = useState('')
    const [cityFilter, setCityFilter] = useState('')
    const [situationFilter, setSituationFilter] = useState('')
    const [clearFilter, setClearFilter] = useState(0)

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('textFilter', textFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [textFilter])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('cityFilter', cityFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [cityFilter])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        urlSearchParams.set('situationFilter', situationFilter);
        const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, [situationFilter])
    
    return (
        <EnterpriseSectionContainer>
            <Section className="section" background="var(--background-secondary)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                           <EnterpriseFilters
                                citiesOptions={citiesOptions}
                                situationOptions={situationOptions}
                                onCityChange={(selectedValue) => {
                                    setCityFilter(selectedValue);
                                }}
                                onSituationChange={(selectedValue) => {
                                    setSituationFilter(selectedValue);
                                }}
                                onSearchChange={(textValue) => {
                                    setTextFilter(textValue);
                                }}
                                clearFilter={clearFilter}
                           />
                        </Col>
                    </Row>
                    <Row>
                        <ListFilters>
                            {textFilter !== '' && <Filter onClick={() => {
                                setTextFilter('')
                                setClearFilter(clearFilter => clearFilter + 1)
                            }}>{textFilter}<AiOutlineClose/></Filter>}
                            {cityFilter !== '' && <Filter onClick={() => {
                                setCityFilter('')
                                setClearFilter(clearFilter => clearFilter + 1)
                            }}>{cityFilter}<AiOutlineClose/></Filter>}
                            {situationFilter !== '' && <Filter onClick={() => {
                                setSituationFilter('')
                                setClearFilter(clearFilter => clearFilter + 1)
                            }}>{situationFilter}<AiOutlineClose/></Filter>}
                        </ListFilters>
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
            </EnterpriseSectionContainer>
    )
}

const EnterpriseSectionContainer = styled.div`
    .section {
        padding:160px 0;

        @media(max-width:768px){
            padding:120px 0 40px;
        }
    }

    .break{
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

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

const ListFilters = styled.div`
  display:flex;
  padding:15px 10px 0;
  gap:5px;

  @media(min-width:768px){
    padding:15px 0 0;
  }
`;

const Filter = styled.div`
  color:var(--text-primary);
  text-decoration:underline;
  font-size:var(--labels-size);
  font-weight:var(--buttons-weight);
  text-transform:uppercase;
  padding:3px 8px;
  display:flex;
  align-items:center;
  gap:3px;
  cursor:pointer;
`;