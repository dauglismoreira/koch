import styled from 'styled-components';

export interface CardProps {
    cover?: string;
    name?: string;
    city?: string;
    district?: string;
    suites?: string;
    garage?: string;
    area?: string;
    url?: string;
}

export const OpportunityCard: React.FC<{ data: CardProps }> = ({ data }) => {
    const { cover, name, city, district, suites, garage, area, url } = data;
    
    return (
        <Card>
            <Cover
                image={cover || ''}
            ></Cover>
            <Content>
                <Name><h3>{name}</h3></Name>
                <Place><p>{district}, {city}</p></Place>
                <Skills>
                    <span>{suites}</span>
                    <span>{garage}</span>
                    <span>{area}</span>
                </Skills>
                <Link><a href={url}>Veja mais</a></Link>
            </Content>
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

const High = styled.div`
    h5 {
        color:var(--text-secondary);
        font-size:13px;
        text-transform:uppercase;
        font-weight:300;
    }
`;

const Name = styled.div`
    h3 {
        color:var(--text-primary);
        font-family: var(--font-primary);
        font-size:1.4rem;
        text-transform:uppercase;
        letter-spacing:0px;
        font-weight:900;
        padding-top:10px;

        @media(max-width:768px){
            font-size:1.2rem;
        }
    }
`;

const Place = styled.div`
    color:var(--text-secondary);
    font-size:12px;
    padding-bottom:20px;
`;

const Skills = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-around;
    color:var(--text-secondary);
    font-weight:600;
    padding-bottom:20px;
    font-size:14px;

    @media(max-width:768px){
        padding:0 20px 20px;
    }
`;

const Link = styled.div`
    a {
     color:var(--text-primary);
     font-size:12px;
     cursor:pointer;
     font-weight:600;
     text-transform:uppercase;
     position:relative;

     &::after {
        content:'';
        width:0%;
        height:1px;
        background-color:var(--text-primary);
        position:absolute;
        bottom:-5px;
        left:0px;
        transition:0.3s;
      }
    
      &:hover{
        &::after {
            width:100%;
        }
      }
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

      ${Link} a {
            color:var(--text-white);
      }

      ${High} h5 {
        color:var(--text-white);
      }

      ${Name} h3 {
        color:var(--text-white);
      }

      ${Place} {
        color:var(--text-white);
      }
    }
`;