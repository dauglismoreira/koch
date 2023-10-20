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
import getStorageFile from '@/helpers/getStorageFile';

export type HighSkills = (string | JSX.Element)[];
export type AboutCharacteristics = (string | JSX.Element)[];
  
  export interface EnterpriseGalleryItem {
    path: string;
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
            <Section padding={!isLargeScreen.isLargeScreen ? "100px 0 0" : "100px 0 0px"} background="var(--background-secondary)">
                <EnterMenuSection/>
                <Container>
                    <EnterTitleSection
                        title={enterprise.enterprise.title}
                        title_high={enterprise.enterprise.status}
                        district={enterprise.enterprise.location_type.location_name}
                        city={enterprise.enterprise.city.name}
                        high_image={enterprise.enterprise?.horizontal_image?.path}
                        enterprise_logo={enterprise.enterprise?.logo_image?.path}
                        high_skills={enterprise.enterprise}
                    />
                    <div id="sobre"><EnterAboutSection
                        about_text={enterprise.enterprise.description}
                        about_characteristics={enterprise.enterprise.differentials}
                        about_image={enterprise.enterprise.vertical_image.path}
                    /></div>
                    <Row><LineDivider></LineDivider></Row>
                    {enterprise.enterprise.galleries?.filter((gallery : any) => gallery.title === 'Galeria de imagens')[0].files.length > 0 &&
                    <>
                      <div id="imagens"></div><EnterImagesSection
                          data={enterprise.enterprise.galleries?.filter((gallery : any) => gallery.title === 'Galeria de imagens')[0].files}
                      />
                      <Row><LineDivider></LineDivider></Row>
                    </>
                    }
                    {enterprise.enterprise.types.length > 0 &&
                    <>
                      <div id="plantas"><EnterPlansSection
                          plans={enterprise.enterprise.types}
                      /></div>
                      <Row><LineDivider></LineDivider></Row>
                    </>
                    }
                    <div id="localizacao"><EnterLocalSection
                        nearby={enterprise.enterprise.nearby}
                        district={enterprise.enterprise.location_type.location_name}
                        city={enterprise.enterprise.city.name}
                        map={enterprise.enterprise.map_iframe}
                        location_description={enterprise.enterprise.location_description}
                    /></div>
                    <Row><LineDivider></LineDivider></Row>
                    <div id="obra"><EnterProgressSection
                        prog={enterprise.enterprise.work_progress}
                        videos={enterprise.enterprise.work_progress_videos}
                        images={enterprise.enterprise.galleries?.filter((gallery : any) => gallery.title === 'Progresso da obra')[0].files}
                        begin_date={enterprise.enterprise.begin_date}
                        end_date={enterprise.enterprise.end_date}
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
    margin:0px 0;

    @media(max-width:768px){
        margin:0 10px;
        width:calc(100% - 30px);
        margin:auto;
    }
`;