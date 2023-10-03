import styled from 'styled-components';
import { Col, Row } from "../../components/grid";
import { HighSkills } from '@/app/empreendimentos/[slug]/enterPage';
import { Baskerville } from '@/app/fonts';

interface EnterTitleSectionProps {
    title:string;
    title_high:string;
    district:string;
    city:string;
    high_image:string;
    enterprise_logo:string;
    high_skills:HighSkills[];
}

export const EnterTitleSection: React.FC<EnterTitleSectionProps> = ({
    title,
    title_high,
    district,
    city,
    high_image,
    enterprise_logo,
    high_skills
}: EnterTitleSectionProps) => {

    return (
        <TitleSection>
            <Row>
                <Col flex={4}>
                    <h5>{title_high}</h5>
                    <h1 className={`${Baskerville.className}`}>{title}</h1>
                    <p>{district}, {city}</p>
                </Col>
                <Col flex={2}>
                    <EnterpriseLogoContainer>
                        <EnterpriseLogo logo={enterprise_logo}></EnterpriseLogo>
                    </EnterpriseLogoContainer>
                </Col>
                <Col flex={6}>
                    <HighSkillsContainer>
                        {high_skills.map((skill, index) => (
                            <HighSkillItem key={index}>{skill}</HighSkillItem>
                        ))}
                    </HighSkillsContainer>
                </Col>
            </Row>
            <Cover style={{backgroundImage:`url('${high_image}')`}}></Cover>
        </TitleSection>
    )
}


const TitleSection = styled.div`
    border-left:solid 1px var(--border-grey);
    border-right:solid 1px var(--border-grey);
    border-bottom:solid 1px var(--border-grey);
    padding:40px 20px;
    display:flex;
    flex-direction:column;

    h5 {
        font-size:var(--small-title-size);
        font-weight:var(--small-title-weight);
        color:var(--text-secondary);
    }

    h1 {
        font-size:var(--big-title-size);
        font-weight:var(--big-title-weight);
        color:var(--text-primary);
        margin:30px 0 5px;
        line-height:1;
        text-transform:uppercase;
    }

    p {
        font-size:var(--small-text-size);
        font-weight:var(--small-text-weight);
        color:var(--text-secondary);
        margin-bottom:50px;
    }

    @media(max-width:768px){
        padding:40px 10px 10px;

        width:calc(100% - 20px);
        margin:auto;

        h1 {
            font-size:font-size:var(--medium-title-size);
            margin:10px 0 15px;
            line-height:1.4;
        }

        h5 {
            font-size:var(--mini-text-size);
            text-transform:uppercase;
            margin-bottom:30px;
            margin-top:15px;
        }

        p {
            margin-bottom:10px;
        }
    }
`;

const HighSkillsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:flex-end;
    height:100%;
    padding-bottom:50px;

    @media(max-width:768px){
        justify-content:space-between;
        padding-bottom:30px;
    }
`;

const HighSkillItem = styled.li`
    list-style: none;
    padding: 0 15px;
    color: var(--text-secondary);
    font-size: var(--small-title-size);
    font-weight: var(--medium-title-weight);

    @media(max-width:768px){
        padding: 0;
        font-size: var(--desktop-text-size);
    }
`;

const EnterpriseLogo = styled.div<{logo: string}>`
     background-image:url('${props => props.logo}');
     width:140px;
     height:140px;
     background-size:contain;
     background-position:center center;
     background-repeat:no-repeat;
`;

const EnterpriseLogoContainer = styled.div`
     height:100%;
     display:flex;
     align-items:center;
     padding-bottom:30px;
`;

const Cover = styled.div`
    width:100%;
    height:910px;
    background-position:center center;
    background-size:cover;

    @media(max-width:768px){
        height:240px;
    }
`;