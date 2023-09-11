'use client'

import styled from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import useScreenSize from '../../hooks/useScreenSize';
import { OpportunityCard } from '../components/opportunityCard';
import { EnterpriseFilters } from '../components/catalogFilters';
import { CardProps } from '../components/enterpriseCard';
import {useState, useEffect} from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface OpportunitiesPageProps {
    aboutInfo:any;
    citiesOptions:any;
    situationOptions:any;
    enterprises:CardProps[];
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({
        aboutInfo,
        citiesOptions,
        situationOptions,
        enterprises,
    }) => {
        const isLargeScreen = useScreenSize(768);

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
                        </Col>
                    </Row>
                    <Row>
                        <EnterpriseListContainer>
                            {enterprises.map((enterprise, index) => (
                                <OpportunityCard key={index} data={enterprise} />
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

const ListFilters = styled.div`
  display:flex;
  padding:15px 10px 0;
  gap:5px;
`;

const Filter = styled.div`
  color:var(--text-primary);
  text-decoration:underline;
  text-transform:uppercase;
  padding:3px 8px;
  display:flex;
  align-items:center;
  gap:3px;
`;