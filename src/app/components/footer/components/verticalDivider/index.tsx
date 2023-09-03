import styled from 'styled-components';

interface DividerProps {
    margin?: string;
    height?: string;
}

export const VerticalDivider: React.FC<DividerProps> = ({margin, height}) => {

    return(
        <VerticalDividerLine style={{
            margin: margin || '-27px 30px',
            height: height || '115px'
        }}></VerticalDividerLine>
    )
}

const VerticalDividerLine = styled.div`
    width:1px;
    background-color:rgba(255,255,255,0.3);
`;