import styled from 'styled-components';
import { Col, Row } from "../grid";
import { SectionTitle } from '../sectionTitle';
import { SectionSubTitle } from '../sectionSubTitle';
import getStorageFile from '@/helpers/getStorageFile';

interface AboutBannerImageProps {
    path: string;
    id: number;
    alt: string;
}

interface AboutBannerProps {
    data: {
        text?: string;
        title?: string;
        desk?: AboutBannerImageProps;
    };
}

export const AboutImageBanner: React.FC<AboutBannerProps> = ({ data }) => {

    return (
        <AboutImageBannerContainer>
            <Row className="section-child">
                <Col flex={2}></Col>
                <Col flex={9}>
                    <Title>
                        <SectionSubTitle text={data.title}/>
                        <SectionTitle size="24px"  text={data.text}/>
                    </Title>
                </Col>
                <Col flex={1}></Col>
            </Row>
            {data && data.desk &&
            <Row>
                <Col className="no-mobile-available" flex={2}>
                    <BannerLabel>
                        <Line></Line>
                        <h6>Construtora<br></br>& Incorporadora</h6>
                    </BannerLabel>
                </Col>
                <Col flex={9}>
                    <ImageBanner data={data.desk ? getStorageFile(data.desk.path) : ''}></ImageBanner>
                    <ImageLine></ImageLine>
                </Col>
                <Col className='no-mobile-available' flex={1}></Col>
            </Row>
            }
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

    .section-child {
        padding:120px 0;

        @media(max-width:768px){
            padding:40px 0;
        }
    }

    .no-mobile-available {
        @media(max-width:768px){
            display:none;
        }
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
        font-weight:var(--small-text-weigh);
        letter-spacing:4px;
        text-transform:uppercase;
        font-size:var(--small-text-size);
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
    margin-top:70px;
    margin-bottom:-50px;
    background-color:rgba(255,255,255,0.3);

    @media(max-width:768px){
        width:calc(100% - 20px);
        margin:20px auto 0;
    }
`;