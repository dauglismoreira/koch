import styled from 'styled-components';
import {useState, useEffect} from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import Image from 'next/image';

interface LogoProps {
    desktop: number;
    mobile: number;
    color?: string;
    padding?: string;
  }

export const Logo: React.FC<LogoProps> = ({desktop, mobile, color, padding}) => {

  const isLargeScreen = useScreenSize(1280);
    const [imageUrl, setImageUrl] = useState('/logos/LOGO-KOCH-1.png');

      useEffect(() => {
        if(color === 'white'){
            setImageUrl('/logos/LOGO-KOCH-1.png')
        }
      }, [color]);

    return(
        <LogoContainer
            desktop={desktop}
            mobile={mobile}
            color={color}
            style={{padding: padding || '0 20px'}}
            windowWidth={isLargeScreen.isLargeScreen}
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

const LogoContainer = styled.div<LogoProps & { windowWidth: boolean }>`
  width: ${(props) =>
    props.windowWidth
      ? `${props.desktop}px`
      : `${props.mobile}px`};

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