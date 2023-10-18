import styled from 'styled-components';
import { Col, Row } from "../grid";
import { AboutCharacteristics } from '@/app/empreendimentos/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';

interface EnterAboutSectionProps {
    about_text: string;
    about_characteristics: {
        label: string;
    }[];
    about_image: string;
}

export const EnterAboutSection: React.FC<EnterAboutSectionProps> = ({
    about_text,
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
                        <SectionBodyText text={about_text} color="var(--text-secondary)"/>
                        <LineDivider></LineDivider>
                        <SkillsList>
                            {about_characteristics?.map((item, index) => (
                                <li key={index}>━ {item.label}</li>
                            ))}
                        </SkillsList>
                        <LineDivider className='no-mobile-available'></LineDivider>
                    </Content>
                </Col>
                <Col flex={5}>
                    <CoverImage image={about_image}></CoverImage>
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

    .no-mobile-available {
        @media(max-width:768px){
            display:none;
        }
    }
`;

const CoverImage = styled.div<{image: string}>`
    margin:auto;
    width:100%;
    height:940px;
    background-image:url('${props => props.image}');
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
        }
    }
`;