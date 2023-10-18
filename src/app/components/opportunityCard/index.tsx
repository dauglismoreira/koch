import { Baskerville } from '@/app/fonts';
import styled from 'styled-components';
import { CardCoverProps, CityProps, LocationProps } from '../enterpriseCard';
import getStorageFile from '@/helpers/getStorageFile';

export interface CardProps {
    title?: string;
    slug?:string;
    parking_spaces?: string;
    area?: string;
    suites?: string;
    status?:string;
    vertical_image?: CardCoverProps;
    location_type?: LocationProps;
    city?: CityProps;
    district?: string;
}

export const OpportunityCard: React.FC<{ data: CardProps }> = ({ data }) => {
    const { title, slug, city, district, suites, vertical_image, area, location_type, status, parking_spaces } = data;
    
    return (
        <Card>
            <a href={`./../oportunidades/${slug}`}><Cover
                image={vertical_image && getStorageFile(vertical_image.path) || ''}
            ></Cover>
            <Content>
                <Name className={`${Baskerville.className}`}><h3>{title}</h3></Name>
                <Place><p>{location_type?.location_name}, {city?.name}</p></Place>
                <Skills>
                    <span>{suites}</span>
                    <span>{parking_spaces}</span>
                    <span>{area}</span>
                </Skills>
                <Link>Veja mais</Link>
            </Content></a>
        </Card>
    );
}

const Cover = styled.div<{image : string}>`
    position: relative;
    height: 65%;
    transition: 0.3s ease-in-out;
    background: transparent;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${props => props.image}');
        background-size: cover;
        background-position: center center;
        transform-origin: center center;
        z-index: 0;
        transition: inherit;
    }
`;

const Content = styled.div`
    height:35%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:20px  0 0;
`;


const Name = styled.div`
    h3 {
        color:var(--text-primary);
        font-size:var(--medium-title-size);
        text-transform:uppercase;
        letter-spacing:0px;
        font-weight:var(--medium-title-weight);
        padding-top:10px;
        text-align:center;

        @media(max-width:768px){
            font-size:var(--small-title-size);
        }
    }
`;

const Place = styled.div`
    color:var(--text-secondary);
    font-size:var(--small-text-size);
    padding-bottom:20px;
`;

const Skills = styled.div`
        display:flex;
        width:100%;
        flex-direction:row;
        justify-content:center;
        gap:40px;
        color:var(--text-secondary);
        font-weight:var(--medium-title-weight);
        padding-bottom:20px;
        font-size:var(--small-text-size);

        @media(max-width:768px){
            padding:0 0 20px;
            gap:35px;
        }
`;

const Link = styled.div`
     color:var(--text-primary);
     font-size:var(--buttons-size);
     cursor:pointer;
     font-weight:var(--buttons-weight);
     text-transform:uppercase;
     position:relative;

     &::after {
        content:'';
        width:0%;
        height:1px;
        background-color:var(--text-white);
        position:absolute;
        bottom:-5px;
        left:0px;
        transition:0.3s;
      }
    
`;

const Card = styled.div`
    width:100%;
    border:solid 1px var(--border-grey);
    padding:20px;
    height:593px;
    transition:0.3s ease-in-out;

    @media(max-width:768px){
        height:593px;
    }

    &:hover{
       background-color:var(--background-primary);

       ${Cover}::before {
        transform: rotate(2deg) scale(1.2);
      }

      ${Link} {
            color:var(--text-white);

            &::after {
                width:100%;
            }
      }

      ${Name} h3 {
        color:var(--text-white);
      }

      ${Skills} {
        color:var(--text-white);
      }

      ${Place} {
        color:var(--text-white);
      }

    }
`;