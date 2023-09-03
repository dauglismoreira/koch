import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    color?: string;
    padding?: string;
  }

export const Logo: React.FC<LogoProps> = ({width, color, padding}) => {

    const [imageUrl, setImageUrl] = useState('/logos/LOGO-KOCH-1.png');

      useEffect(() => {
        if(color === 'white'){
            setImageUrl('/logos/LOGO-KOCH-1.png')
        }
      }, [color]);

    return(
        <LogoContainer
            width={width || 140}
            color={color}
            style={{padding: padding || '0 20px'}}
        >
            <a href="./../"><Image
                src={imageUrl}
                alt="Logo Koch"
                width={300}
                height={50}
            /></a>
        </LogoContainer>
    )
}

const LogoContainer = styled.div<{ width:number }>`
  width: ${props => props.width}px;
  img {
    max-width: 100%;
    height: auto;
    margin-left:-10px;
  }

  @media(max-width:768px){
    position:absolute;
    top:22px;
    z-index:99;
  }
`;