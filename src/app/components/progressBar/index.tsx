import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
    label?:string;
    progress?:number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    label,
    progress
}) => {

    const [progressEnd, setProgressEnd] = useState(0);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && progress) {
            setTimeout(() => {
                const animationDuration = 2000;
                const frames = animationDuration / 100;
                const increment = progress / frames;

                let currentProgress = 0;
                const interval = setInterval(() => {
                    currentProgress += increment;
                    setProgressEnd(currentProgress);

                    if (currentProgress >= progress) {
                        clearInterval(interval);
                    }
                }, 10);
            }, 500);
        }
    }, [progress, inView]);

    return (
        <ContainerProgressStage ref={ref}>
            <Title>{label}</Title>
            <ProgressBarContainer>
                <Progress status={Math.ceil(progressEnd)}></Progress>
                <Value>{Math.ceil(progressEnd)}%</Value>
            </ProgressBarContainer>
        </ContainerProgressStage>
    )
}

const ContainerProgressStage = styled.div`
    margin:30px 0;

    @media(max-width:768px){
        width:calc(100% - 20px);
        margin:20px auto 0;
    }
`;

const Title = styled.div`
    color:var(--text-primary);
    font-weight:var(--small-text-weight);
    font-size:var(--small-text-size);
`;


const Progress = styled.div<{status: number}>`
    width:90%;
    background-color:var(--background-secondary-variation);
    height:8px;
    position:relative;
    transition: width 0.3s ease;

    &::after{
        content:'';
        width:${props => props.status}%;
        position:absolute;
        left:0;
        top:0;
        height:8px;
        background-color:var(--background-primary);
        transition: width 0.3s ease;
    }
`;

const ProgressBarContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    align-items:center;
    margin-top:10px;
`;

const Value = styled.div`
    color:var(--text-primary);
    font-weight:var(--small-text-weight);
    font-size:var(--small-text-size);
    padding-bottom:3px;
`;