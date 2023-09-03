
import styled from 'styled-components';
import { Col, Row } from '../../../../../components/grid';
import useScreenSize from '../../../../../../hooks/useScreenSize';
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
    const isLargeScreen = useScreenSize(768);

    return (
        <Row breakpoint={!isLargeScreen.isLargeScreen}>
            <Col flex={2}>
                <SectionSubTitle text={info && info.sectionTitle} color="var(--text-secondary)"/>
            </Col>
            <Col flex={8}>
                <Content>
                    <Title>
                        <SectionTitle size="24px" text={info && info.title} color="var(--text-primary)"/>
                    </Title>
                </Content>
            </Col>
            {isLargeScreen.isLargeScreen &&
                <Col flex={2}>
                    <MoreButton cta={info && info.cta} link={info && info.link}/>
                </Col>
            }
        </Row>
    );
}

const Content = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Title = styled.div`

`;