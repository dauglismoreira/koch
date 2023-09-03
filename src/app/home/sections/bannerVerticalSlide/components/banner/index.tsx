import React from 'react';
import styled from 'styled-components';

interface BannerProps {
    images: string[];
    activeIndex: number;
    handleBannerMouseEnter: () => void;
    handleBannerMouseLeave: () => void;
    width:number;
}

export const Banner: React.FC<BannerProps> = ({
    images,
    width,
    activeIndex,
    handleBannerMouseEnter,
    handleBannerMouseLeave,
}) => {
    return (
        <BannerWrapper
            onMouseEnter={handleBannerMouseEnter}
            onMouseLeave={handleBannerMouseLeave}
            width={width}
        >
            <ImageContainer
                width={width}
                activeIndex={activeIndex}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        background={image}
                        width={width}
                    />
                ))}
            </ImageContainer>
        </BannerWrapper>
    );
}

const BannerWrapper = styled.div<{width: number}>`
    height: ${(props) => ((props.width - 337) / 1.7)}px;
    border-left: solid 1px var(--border-grey);
    border-right: solid 1px var(--border-grey);
    border-bottom: solid 1px var(--border-grey);
    padding: 20px;
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;

    @media(max-width:900px){
        padding: 5px;
        height: ${(props) => (props.width / 1.7)}px;
    }
`;

const ImageContainer = styled.div<{ activeIndex: number; width: number }>`
    width: 100%;
    transform: translateY(${(props) => -props.activeIndex * (((props.width - 337) / 1.7) - 10)}px);
    transition: transform 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media(max-width:900px){
        transform: translateY(${(props) => -props.activeIndex * ((props.width / 1.7) + 20)}px);
    }
`;

const Image = styled.div<{ background: string; width: number }>`
    height: ${(props) => ((props.width - 337) / 1.7) - 40}px;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-image: ${(props) => `url('${props.background}')`};

    @media(max-width:900px){
        height: ${(props) => (props.width / 1.7) - 10}px;
    }
`;