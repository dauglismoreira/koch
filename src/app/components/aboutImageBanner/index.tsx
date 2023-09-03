import styled from 'styled-components';
import { Col, Row } from "../grid";
import { SectionTitle } from '../sectionTitle';
import { SectionSubTitle } from '../sectionSubTitle';
import useScreenSize from '../../../hooks/useScreenSize';

interface AboutBannerProps {
    data: {
        sectionTitle?: string;
        title?: string;
        image?: string;
    };
}

export const AboutImageBanner: React.FC<AboutBannerProps> = ({ data }) => {
    const isLargeScreen = useScreenSize(768);

    return (
        <AboutImageBannerContainer>
            <Row padding={!isLargeScreen.isLargeScreen ? "40px 0" : "120px 0"}>
                <Col flex={2}></Col>
                <Col flex={9}>
                    <Title>
                        <SectionSubTitle text={data.sectionTitle}/>
                        <SectionTitle size="24px"  text={data.title}/>
                    </Title>
                </Col>
                <Col flex={1}></Col>
            </Row>
            <Row>
                {isLargeScreen.isLargeScreen &&
                <Col flex={2}>
                    <BannerLabel>
                        <Line></Line>
                        <h6>Construtora<br></br>& Incorporadora</h6>
                    </BannerLabel>
                </Col>
                }
                <Col flex={9}>
                    <ImageBanner data={data.image ? data.image : ''}></ImageBanner>
                    <ImageLine></ImageLine>
                </Col>
                {isLargeScreen.isLargeScreen && <Col flex={1}></Col>}
            </Row>
        </AboutImageBannerContainer>
    )
}

const AboutImageBannerContainer = styled.div`
    & h5 {
        text-align:center;
    }

    & h1 {
        text-align:center;
    }
`;

const Title = styled.div`
    color:var(--text-white);
    padding: 0 20px;
    margin:80px 0 40px;
    display:flex;
    flex-direction:column;
    gap:50px;
    align-items:center;

    @media(max-width:768px){
        margin:30px 0 10px;
        gap:30px;
    }
`;

const ImageBanner = styled.div<{data: string}>`
    margin:auto;
    width:100%;
    height:785px;
    background-image:url('${props => props.data}');
    background-position: center center;
    background-size:cover;
    position:relative;

    @media(max-width:768px){
        height:230px;
        width:calc(100% - 20px);
    }
`;

const BannerLabel= styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:25px;
    margin-top:-30px;

    h6 {
        color:var(--text-white);
        font-weight:300;
        letter-spacing:4px;
        text-transform:uppercase;
        font-size:9px;
    }
`;

const Line= styled.div`
    width:30%;
    height:1px;
    background-color:rgba(255,255,255,0.3);
`;

const ImageLine= styled.div`
    width:100%;
    height:1px;
    margin-top:30px;
    background-color:rgba(255,255,255,0.3);

    @media(max-width:768px){
        width:calc(100% - 20px);
        margin:30px auto 0;
    }
`;