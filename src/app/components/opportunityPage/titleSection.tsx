import styled from 'styled-components';
import { Col, Row } from "../grid";
import { HighSkills } from '@/app/empreendimentos/[slug]/enterPage';
import { Baskerville } from '@/app/fonts';

interface OpportunityTitleSectionProps {
    title:string;
    district:string;
    city:string;
    price:number;
    high_image:string;
    high_skills:HighSkills[];
}

export const OpportunityTitleSection: React.FC<OpportunityTitleSectionProps> = ({
    title,
    district,
    city,
    price,
    high_image,
    high_skills
}: OpportunityTitleSectionProps) => {

    return (
        <TitleSection>
            <Row>
                <Col flex={6}>
                    <h1 className={`${Baskerville.className}`}>{title}</h1>
                    <p>{district}, {city}</p>
                </Col>
                <Col flex={6}>
                    <ColContainer>
                        <InfoContainer>
                            <PriceContainer>
                                <span className={Baskerville.className}>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                            </PriceContainer>
                            <HighSkillsContainer>
                                {high_skills.map((skill, index) => (
                                    <HighSkillItem key={index}>{skill}</HighSkillItem>
                                ))}
                            </HighSkillsContainer>
                        </InfoContainer>
                    </ColContainer>
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
    padding-bottom:50px;

    @media(max-width:768px){
        justify-content:space-between;
        padding-bottom:30px;
        width:100%;
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
        font-size: var(--mobile-text-size);
    }
`;

const PriceContainer = styled.div`
    display:flex;
    align-items:flex-end;
    padding:0 15px;
    span {
        font-size:var(--medium-title-size);
        font-weight:var(--medium-title-weight);
        color:var(--text-primary);
    }

    @media(max-width:768px){
        padding: 0;
    }
`;

const InfoContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    flex-direction:column;
    align-items:flex-start;
    gap:20px;
    height:100%;
`;

const ColContainer = styled.div`
    width:100%;
    display:flex;
    height:100%;
    justify-content:flex-end;

    @media(max-width:768px){
        display:block;
    }
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
