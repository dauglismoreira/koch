'use client'

import styled, { keyframes } from 'styled-components';
import { Col, Container, Row, Section } from "../components/grid";
import { SectionSubTitle } from '../components/sectionSubTitle';
import { OpportunityCard } from '../components/opportunityCard';
import { EnterpriseFilters } from '../components/catalogFilters';
import { CardProps } from '../components/enterpriseCard';
import React, {useState, useEffect} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { OpportunitiesSection } from '../home/sections/opportunitiesSection';
import { oportunitiesInfo, oppotunitiesButtons } from '../home/data';

interface OpportunitiesPageProps {
    aboutInfo:any;
    cities?:any;
    status?:any;
    loading:boolean;
    enterprises:CardProps[];
    onURLParametersChange:any;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({
        aboutInfo,
        onURLParametersChange,
        cities,
        status,
        loading,
        enterprises,
    }) => {

        const [textFilter, setTextFilter] = useState('')
        const [cityFilter, setCityFilter] = useState('')
        const [situationFilter, setSituationFilter] = useState('')
        const [clearFilter, setClearFilter] = useState(0)
        const [count, setCount] = useState(0)
/* eslint-disable react-hooks/exhaustive-deps */
        useEffect(() => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            if(count > 0){
            urlSearchParams.set('search', textFilter);
            const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
    
            if (onURLParametersChange) {
                onURLParametersChange({
                  textFilter,
                });
              }
            }else{
                setTextFilter(urlSearchParams.get('search') ?? '')
                setCount(count => count + 1)
            }
        }, [textFilter])
        /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react-hooks/exhaustive-deps */
        useEffect(() => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            if(count > 0){
            urlSearchParams.set('city', cityFilter);
            const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
    
            if (onURLParametersChange) {
                onURLParametersChange({
                    cityFilter,
                });
              }
            }else{
                setCityFilter(urlSearchParams.get('city') ?? '')
                setCount(count => count + 1)
            }
        }, [cityFilter])
        /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react-hooks/exhaustive-deps */
        useEffect(() => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            if(count > 0){
            urlSearchParams.set('status', situationFilter);
            const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
    
            if (onURLParametersChange) {
                onURLParametersChange({
                    situationFilter,
                });
              }
            }else{
                setSituationFilter(urlSearchParams.get('status') ?? '')
                setCount(count => count + 1)
            }
        }, [situationFilter])
        /* eslint-disable react-hooks/exhaustive-deps */

    return (
        <OpportunitiesSectionContainer>
            {loading &&
              <SpinnerContainer>
                <Spinner></Spinner>
              </SpinnerContainer>
            }
            <Section className="section" background="var(--background-secondary)">
                <Container>
                    <Row className="break">
                        <Col flex={2}>
                            <SectionSubTitle text={aboutInfo && aboutInfo.sectionTitle} color="var(--text-secondary)"/>
                        </Col>
                        <Col flex={10}>
                            <EnterpriseFilters
                                citiesOptions={cities}
                                situationOptions={status}
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
                                }}>{cities.filter((city : any) => city.id == cityFilter)[0].name}<AiOutlineClose/></Filter>}
                                {situationFilter !== '' && <Filter onClick={() => {
                                    setSituationFilter('')
                                    setClearFilter(clearFilter => clearFilter + 1)
                                }}>{situationFilter}<AiOutlineClose/></Filter>}
                           </ListFilters>
                        </Col>
                    </Row>
                    <Row>
                        <EnterpriseListContainer>
                            {enterprises.map((page: any, i : number) => (
                                <React.Fragment key={i}>
                                    {page?.data.length > 0 ?
                                    page?.data.map((enterprise:any, index:number) => (
                                        <OpportunityCard key={index} data={enterprise} />
                                    ))
                                    :
                                    <p>Sem resultados encontrados.</p>}
                                </React.Fragment>
                            ))}
                        </EnterpriseListContainer>
                    </Row>
                </Container>
            </Section>
            </OpportunitiesSectionContainer>
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


const OpportunitiesSectionContainer = styled.div`

    .section{
        padding:160px 0 40px;

        @media(max-width:768px){
            padding:120px 0 40px;
        }
    }


    .break {
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