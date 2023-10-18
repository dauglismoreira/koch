import { Col, Row } from '../../../../../components/grid';
import useScreenSize from '../../../../../../hooks/useScreenSize';
import { SectionSubTitle } from '../../../../../components/sectionSubTitle';
import { SectionTitle } from '../../../../../components/sectionTitle';
import { MoreButton } from '../../../../../components/moreButton';

export interface InfoProps {
    info?: {
        subTitle:string;
        title:string;
        cta:string;
        link:string;
    }
}

export const GridCarouselTitle: React.FC<InfoProps> = ({ info }) => {
    const isLargeScreen = useScreenSize(768);
    
    return (
        <Row breakpoint={!isLargeScreen.isLargeScreen ? "true" : 'false'}>
            <Col flex={2}>
                <SectionSubTitle text={info && info.subTitle} color="var(--text-secondary)"/>
            </Col>
            <Col flex={8}>
                <SectionTitle text={info && info.title} color="var(--text-primary)"/>
            </Col>
            {isLargeScreen.isLargeScreen &&
                <Col flex={2}>
                    <MoreButton cta={info && info.cta} link={info && info.link}/>
                </Col>
            }
        </Row>
    );
}