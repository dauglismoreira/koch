'use client'

import styled from 'styled-components';
import { Container, Row, Section } from "../../components/grid";
import { OpportunityLocalSection } from '@/app/components/opportunityPage/localSection';
import { OpportunityImagesSection } from '@/app/components/opportunityPage/imagesSection';
import { OpportunityAboutSection } from '@/app/components/opportunityPage/aboutSection';
import { OpportunityTitleSection } from '@/app/components/opportunityPage/titleSection';
import { OpportunityMenuSection } from '@/app/components/opportunityPage/meunSection';
import { OpportunitiesSection } from '@/app/home/sections/opportunitiesSection';
import { oportunitiesInfo, oppotunitiesButtons } from '@/app/home/data';

export type HighSkills = (string | JSX.Element)[];
export type AboutCharacteristics = (string | JSX.Element)[];
  
  export interface EnterpriseGalleryItem {
    url: string;
    thumb: string;
    alt: string;
  }
  
  export interface Plan {
    name: string;
    image: string;
    skill: string[];
  }
  
  export interface Localization {
    local_description: string;
    latitude: number;
    longitude: number;
    nearby: string[];
  }
  
  export interface Progress {
    video: string;
    start: string;
    forecast: string;
    foundation: number;
    structure: number;
    masonry: number;
    plaster: number;
  }

  interface OpportunitiesProps {
    opportunity:any;
    home?:any;
  }

export const EnterPage: React.FC<OpportunitiesProps> = ({opportunity, home}) => {

    return (
        <EnterPageSectionContainer>
            <Section className="section" background="var(--background-secondary)">
                <OpportunityMenuSection/>
                <Container>
                    <OpportunityTitleSection
                        title={opportunity.title}
                        district={opportunity.location_type.location_name}
                        city={opportunity.city.name}
                        price={opportunity.price}
                        high_image={opportunity.horizontal_image.path}
                        suites={opportunity.suites}
                        parking_spaces={opportunity.parking_spaces}
                        area={opportunity.area}
                    />
                    {(opportunity.vertical_image.path
                    || opportunity.featured_features.length > 0
                    || opportunity.differentials.length > 0) &&
                      <>
                        <div id="sobre"><OpportunityAboutSection
                          about_skills={opportunity.differentials}
                          about_characteristics={opportunity.featured_features}
                          about_image={opportunity.vertical_image.path}
                        /></div>
                        <Row><LineDivider></LineDivider></Row>
                      </>
                    }
                    {opportunity.galleries?.filter((gallery : any) => gallery.title === 'Progresso da obra')[0].files.length > 0 &&
                    <>
                      <div id="imagens"></div><OpportunityImagesSection
                          data={opportunity.galleries?.filter((gallery : any) => gallery.title === 'Progresso da obra')[0].files}
                      />
                      <Row><LineDivider></LineDivider></Row>
                    </>
                    }
                    {(opportunity.location_description
                    || opportunity.location_type.location_name
                    || opportunity.city.name
                    || opportunity.map_iframe ) &&
                      <div id="localizacao"><OpportunityLocalSection
                          data={opportunity.location_description}
                          district={opportunity.location_type.location_name}
                          city={opportunity.city.name}
                          map={opportunity.map_iframe}
                      /></div>
                    }
                    <Row><LineDivider></LineDivider></Row>
                    <div id="oportunidades"><OpportunitiesSection
                      buttonsList={oppotunitiesButtons}
                      info={oportunitiesInfo}
                      data={home}
                    /></div>
                </Container>
            </Section>
            </EnterPageSectionContainer>
    )
}

const EnterPageSectionContainer = styled.div`
    .section{
        padding:100px 0 0;
    }

    #oportunidades{
      padding-bottom:100px;
    }

    @media(max-width:768px){
      #oportunidades{
        padding-bottom:60px;
        margin-top:-40px;
      }
    }
`;

const LineDivider = styled.div`
    width:100%;
    height:1px;
    background-color:var(--border-grey);
    margin:20px 0;

    @media(max-width:768px){
        margin:0 10px;
    }
`;