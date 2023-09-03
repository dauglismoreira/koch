'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section } from '../../../components/grid';
import { Banner } from './components/banner';
import { SlideControllers } from './components/controllers';
import useScreenSize from '../../../../hooks/useScreenSize';

interface BannerProps {
    images?: string[];
    text?: string;
    autoPlayTime?: number;
    auto?: boolean;
}

export const BannerVerticalSlide: React.FC<BannerProps> = ({ autoPlayTime, auto, images = [], text }) => {
    const isLargeScreen = useScreenSize(1280);
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(auto ? auto : false);
    const autoPlayInterval = autoPlayTime;

    const handleOptionClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (autoPlay && images) {
            intervalId = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, autoPlayInterval);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [autoPlay, images]);

    const handleBannerMouseEnter = () => {
        setAutoPlay(false);
    };

    const handleBannerMouseLeave = () => {
        setAutoPlay(true);
    };

    return (
        <Section padding="0 0 15px" background="var(--background-secondary)">
            <Content>
                <LeftCol
                    widthScreen={isLargeScreen.width}
                >
                    <span>{text}</span>
                </LeftCol>
                <CenterCol
                    widthScreen={isLargeScreen.width}
                >
                    <Banner
                        width={isLargeScreen.width}
                        images={images}
                        activeIndex={activeIndex}
                        handleBannerMouseEnter={handleBannerMouseEnter}
                        handleBannerMouseLeave={handleBannerMouseLeave}
                    />
                </CenterCol>
                <RightCol
                    widthScreen={isLargeScreen.width}
                >
                    <SlideControllers
                        images={images}
                        activeIndex={activeIndex}
                        handleOptionClick={handleOptionClick}
                    />
                </RightCol>
            </Content>
        </Section>
    );
}

const Content = styled.div`
    width:100%;    
    display:flex;
    flex-direction:row;
`;

const CenterCol = styled.div<{widthScreen : number}>`
    width: 100%;
    max-width:${(props) => (props.widthScreen - 337)}px;

    @media(max-width:1360px) and (min-width:900px){
        max-width:${(props) => (props.widthScreen - 97)}px;
    }

    @media(max-width:900px){
        max-width:calc(100% - 10px);
        margin:auto;
    }
`;

const LeftCol = styled.div<{widthScreen : number}>`
    width:${(props) => (props.widthScreen - 100) - (props.widthScreen - 337)}px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    span {
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%) rotate(-90deg);
        white-space:nowrap;
        color:var(--text-secondary);
        background-color:var(--background-secondary);
        padding:8px 0;
        z-index:2;
        text-transform:uppercase;
        font-size:12px;
        letter-spacing:3px;
    }

    &::after{
        content:'';
        width:100%;
        height:1px;
        background-color:var(--border-grey);
        position:absolute;
        top:50%;
        z-index:1;
    }

    @media(max-width:1360px) and (min-width:900px){
        width:${(props) => (props.widthScreen - 220) - (props.widthScreen - 337)}px;
    }

    @media(max-width:900px){
        display:none;
    }
`;

const RightCol = styled.div<{widthScreen : number}>`
    width:${(props) => (props.widthScreen - 100) - (props.widthScreen - 337)}px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;

    @media(max-width:1360px) and (min-width:900px){
        width:${(props) => (props.widthScreen - 220) - (props.widthScreen - 337)}px;
    }

    @media(max-width:900px){
        display:none;
    }
`;