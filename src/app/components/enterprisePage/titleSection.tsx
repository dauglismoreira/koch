import styled from 'styled-components';
import { Col, Row } from "../../components/grid";
import useScreenSize from '../../../hooks/useScreenSize';
import { HighSkills } from '@/app/empreendimentos/[slug]/enterPage';

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
    const isLargeScreen = useScreenSize(768);

    return (
        <TitleSection>
            <Row>
                <Col flex={4}>
                    <h5>{title_high}</h5>
                    <h1>{title}</h1>
                    <p>{district}, {city}</p>
                </Col>
                {isLargeScreen.isLargeScreen && <Col flex={2}>
                    <EnterpriseLogoContainer>
                        <EnterpriseLogo logo={enterprise_logo}></EnterpriseLogo>
                    </EnterpriseLogoContainer>
                </Col>}
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
        font-size:16px;
        font-weight:300;
        color:var(--text-secondary);
    }

    h1 {
        font-size:58px;
        font-weight:800;
        color:var(--text-primary);
        font-family:var(--font-primary);
        margin:30px 0 5px;
        line-height:1;
        text-transform:uppercase;
    }

    p {
        font-size:16px;
        font-weight:300;
        color:var(--text-secondary);
        margin-bottom:50px;
    }

    @media(max-width:768px){
        padding:40px 10px 10px;

        h5 {
            display:none;
        }

        h1 {
            font-size:24px;
            margin:10px 0 20px;
        }

        p {
            margin-bottom:30px;
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
        justify-content:flex-start;
    }
`;

const HighSkillItem = styled.li`
    list-style: none;
    padding: 0 15px;
    color: var(--text-secondary);
    font-size: 16px;
    font-weight: 600;

    @media(max-width:768px){
        padding: 0 15px 0 0;
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