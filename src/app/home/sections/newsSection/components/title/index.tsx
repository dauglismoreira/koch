
import styled from 'styled-components';
import { Col, Row } from '../../../../../components/grid';
import { SectionSubTitle } from '../../../../../components/sectionSubTitle';
import { SectionTitle } from '../../../../../components/sectionTitle';
import { MoreButton } from '../../../../../components/moreButton';

interface NewsSectionTitleProps {
    info?: {
        sectionTitle: string;
        title: string;
        cta: string;
        link: string;
      };
}

export const NewsTitleSection: React.FC<NewsSectionTitleProps> = ({ info }) => {

    return (
        <NewsTitleContainer>
            <Row className="break">
                <Col flex={2}>
                    <SectionSubTitle text={info && info.sectionTitle} color="var(--text-secondary)"/>
                </Col>
                <Col flex={8}>
                    <Content>
                        <Title>
                            <SectionTitle size="var(--medium-title-size)" text={info && info.title} color="var(--text-primary)"/>
                        </Title>
                    </Content>
                </Col>
                <Col className="no-mobile-available" flex={2}>
                    <MoreButton cta={info && info.cta} link={info && info.link}/>
                </Col>
            </Row>
        </NewsTitleContainer>
    );
}

const NewsTitleContainer = styled.div`

    .no-mobile-available {
        @media(max-width:768px){
            display:none;
        }
    }

    .break {
        @media(max-width:768px){
            flex-direction:column;
        }
    }
`;


const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.div`

`;