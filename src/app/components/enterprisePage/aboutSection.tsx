import styled from 'styled-components';
import { Col, Row } from "../grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { AboutCharacteristics, HighSkills } from '@/app/empreendimento/[slug]/enterPage';
import { SectionBodyText } from '../sectionBodyText';
import { SectionSubTitle } from '../sectionSubTitle';

interface EnterAboutSectionProps {
    about_text: string;
    about_characteristics: AboutCharacteristics;
    about_image: string;
}

export const EnterAboutSection: React.FC<EnterAboutSectionProps> = ({
    about_text,
    about_characteristics,
    about_image,
}) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <AboutSection>
            <Row break={!isLargeScreen.isLargeScreen}>
                <Col flex={2}>
                    <SectionSubTitle text={`Sobre o\nempreendimento`} color="var(--text-secondary)"/>
                </Col>
                <Col flex={5}>
                    <Content>
                        {isLargeScreen.isLargeScreen && <SectionBodyText text={about_text} color="var(--text-secondary)"/>}
                        {isLargeScreen.isLargeScreen && <LineDivider></LineDivider>}
                        <SkillsList>
                            {about_characteristics.map((item, index) => (
                                <li key={index}>━ {item}</li>
                            ))}
                        </SkillsList>
                        {isLargeScreen.isLargeScreen && <LineDivider></LineDivider>}
                    </Content>
                </Col>
                <Col flex={5}>
                    <Image image={about_image}></Image>
                </Col>
            </Row>
        </AboutSection>
    )
}


const AboutSection = styled.div`
    padding:140px 0;

    @media(max-width:768px){
        padding:60px 0;
    }
`;

const Image = styled.div<{image: string}>`
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
`;

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;

    p {
        font-size:15px;
    }

    @media(max-width: 768px){
        padding:0 10px;
        gap:40px;
    }
`;

const SkillsList = styled.div`
    li {
        color:var(--text-primary);
        font-size:16px;
        font-weight:600;
        margin:30px 0;
        list-style:none;

        @media(max-width:768px){
            font-size:13px;
        }
    }
`;