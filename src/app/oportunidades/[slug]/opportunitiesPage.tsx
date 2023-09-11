'use client'

import styled from 'styled-components';
import { Container, Row, Section } from "../../components/grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { OpportunityLocalSection } from '@/app/components/opportunityPage/localSection';
import { OpportunityImagesSection } from '@/app/components/opportunityPage/imagesSection';
import { OpportunityAboutSection } from '@/app/components/opportunityPage/aboutSection';
import { OpportunityTitleSection } from '@/app/components/opportunityPage/titleSection';
import { OpportunityMenuSection } from '@/app/components/opportunityPage/meunSection';

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
  }

export const EnterPage: React.FC<OpportunitiesProps> = ({opportunity}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "70px 0 0" : "70px 0"} background="var(--background-secondary)">
                <OpportunityMenuSection/>
                <Container>
                    <OpportunityTitleSection
                        title={opportunity.title}
                        district={opportunity.district}
                        city={opportunity.city}
                        price={opportunity.price}
                        high_image={opportunity.high_image}
                        high_skills={opportunity.high_skills}
                    />
                    <div id="sobre"><OpportunityAboutSection
                        about_skills={opportunity.about_skills}
                        about_characteristics={opportunity.about_characteristics}
                        about_image={opportunity.about_image}
                    /></div>
                    <Row><LineDivider></LineDivider></Row>
                    <div id="imagens"></div><OpportunityImagesSection
                        data={opportunity.enterprise_gallery}
                    />
                    <Row><LineDivider></LineDivider></Row>
                    <div id="localizacao"><OpportunityLocalSection
                        data={opportunity.localization}
                        district={opportunity.district}
                        city={opportunity.city}
                    /></div>
                </Container>
            </Section>
            </>
    )
}

const LineDivider = styled.div`
    width:100%;
    height:1px;
    background-color:var(--border-grey);
    margin:40px 0;

    @media(max-width:768px){
        margin:0 10px;
    }
`;