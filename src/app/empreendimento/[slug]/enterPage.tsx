'use client'

import styled from 'styled-components';
import { Container, Row, Section } from "../../components/grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { EnterTitleSection } from '@/app/components/enterprisePage/titleSection';
import { EnterAboutSection } from '@/app/components/enterprisePage/aboutSection';
import { EnterImagesSection } from '@/app/components/enterprisePage/imagesSection';
import { EnterPlansSection } from '@/app/components/enterprisePage/plansSection';
import { EnterLocalSection } from '@/app/components/enterprisePage/localSection';
import { EnterMenuSection } from '@/app/components/enterprisePage/meunSection';
import { EnterProgressSection } from '@/app/components/enterprisePage/progressSection';

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

  interface EnterpriseProps {
    enterprise:any;
  }

export const EnterPage: React.FC<EnterpriseProps> = ({enterprise}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <>
            <Section padding={!isLargeScreen.isLargeScreen ? "70px 0 0" : "70px 0"} background="var(--background-secondary)">
                <EnterMenuSection/>
                <Container>
                    <EnterTitleSection
                        title={enterprise.title}
                        title_high={enterprise.title_high}
                        district={enterprise.district}
                        city={enterprise.city}
                        high_image={enterprise.high_image}
                        enterprise_logo={enterprise.enterprise_logo}
                        high_skills={enterprise.high_skills}
                    />
                    <EnterAboutSection
                        about_text={enterprise.about_text}
                        about_characteristics={enterprise.about_characteristics}
                        about_image={enterprise.about_image}
                    />
                    <Row><LineDivider></LineDivider></Row>
                    <EnterImagesSection
                        data={enterprise.enterprise_gallery}
                    />
                    <Row><LineDivider></LineDivider></Row>
                    {isLargeScreen.isLargeScreen && <EnterPlansSection
                        plans={enterprise.plans}
                    />}
                    {isLargeScreen.isLargeScreen && <Row><LineDivider></LineDivider></Row>}
                    <EnterLocalSection
                        data={enterprise.localization}
                        district={enterprise.district}
                        city={enterprise.city}
                    />
                    {isLargeScreen.isLargeScreen && <Row><LineDivider></LineDivider></Row>}
                    {isLargeScreen.isLargeScreen && <EnterProgressSection
                        data={enterprise.progress}
                    />}
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
        margin:0;
    }
`;