import styled from 'styled-components';
import { Col, Row } from "../grid";
import { SectionSubTitle } from '../sectionSubTitle';
import getStorageFile from '@/helpers/getStorageFile';

interface OpportunityAboutSectionProps {
    about_skills: any;
    about_characteristics: any;
    about_image: string;
}

export const OpportunityAboutSection: React.FC<OpportunityAboutSectionProps> = ({
    about_skills,
    about_characteristics,
    about_image,
}) => {

    return (
        <AboutSection>
            <Row className="break">
                <Col flex={2}>
                    <SectionSubTitle text={`Sobre o\nempreendimento`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={5}>
                    <Content>
                        <SkillsList>
                            {about_characteristics.length > 0 &&
                            about_characteristics.map((item: any, index: number) => (
                                <li key={index}>━ {item.label}</li>
                            ))}
                        </SkillsList>
                        {about_skills.length > 0 &&
                        <>
                            <LineDivider></LineDivider>
                            <SkillsGrid>
                                {about_skills.map((item: any, index: number) => (
                                    <p key={index}>{item.label}</p>
                                ))}
                            </SkillsGrid>
                        </>
                        }
                    </Content>
                </Col>
                <Col flex={5}>
                    {about_image &&
                        <BannerImage background={getStorageFile(about_image)}></BannerImage>
                    }
                </Col>
            </Row>
        </AboutSection>
    )
}


const AboutSection = styled.div`
    padding:100px 0;

    @media(max-width:768px){
        padding:60px 0;
    }

    .break {
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;

const BannerImage = styled.div<{background: string}>`
    margin:auto;
    width:100%;
    height:940px;
    background-image:url('${props => props.background}');
    background-position: center center;
    background-size:cover;

    @media(max-width: 768px){
        width:calc(100% - 20px);
        height:455px;
    }
`;

const LineDivider = styled.div`
    width:100%;
    height:1px;
    background-color:var(--border-grey);
    margin:40px 0;

    @media(max-width:768px){
        margin:0;
    }
`;

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;

    p {
        font-size:var(--desktop-text-size);
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;

        p {
            font-size:var(--mobile-text-size);
        }
    }
`;

const SkillsList = styled.div`
    li {
        color:var(--text-primary);
        font-size:var(--desktop-text-size);
        font-weight:var(--medium-title-weight);
        margin:30px 0;
        list-style:none;

        @media(max-width:768px){
            font-size:var(--small-text-size);
            margin:30px 0 10px;
        }
    }
`;

const SkillsGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:10px;
    margin:30px 0 0;
    transition: opacity 0.3s ease;
    opacity: 1;

    &.hidden {
        opacity: 0;
    }

    p {
        color:var(--text-secondary);
        font-size:var(--small-text-size);
    }

    @media(max-width:768px){
        margin:10px 0;
        gap:20px;
    }
`;