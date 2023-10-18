import { useState } from 'react';
import styled from 'styled-components';

interface CheckContainerProps {
    onAcceptChange: (newAcceptValue: boolean) => void;
    color?: string;
    data?:any;
}

export const CheckFormAccept: React.FC<CheckContainerProps> = ({ data, onAcceptChange, color }) =>{
    const [accept, setAccept] = useState(false);

    const handleAcceptChange = () => {
        setAccept(!accept);
        onAcceptChange(!accept);
    };

    return (
        <CheckContainer color={color ? color : 'var(text-white)'}>
            <input id="accept" name="accept" type="checkbox"
                checked={accept}
                onChange={handleAcceptChange}
            ></input>
            <label htmlFor="accept">
                <div dangerouslySetInnerHTML={{ __html: data && data.long_text }} />
            </label>
        </CheckContainer>
    )
}

const CheckContainer = styled.div<{color: string}>`
    display:flex;
    flex-direction:row;
    gap:8px;

    label {
        font-size:var(--mini-text-size);
        color:${props => props.color};
    }
    input {
        width:20px;
        height:20px;
        margin-top:0;
    }

    p{
        font-size:var(--mini-text-size)!important;
    }
`;