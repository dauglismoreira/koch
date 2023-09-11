import { useState } from 'react';
import styled from 'styled-components';

interface CheckContainerProps {
    onAcceptChange: (newAcceptValue: boolean) => void;
    color?: string;
}

export const CheckFormAccept: React.FC<CheckContainerProps> = ({ onAcceptChange, color }) =>{
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
            <label htmlFor="accept">A Koch Construtora respeita sua privacidade e utiliza seus dados pessoais para contatá-lo por e-mail ou telefone aqui registrados. Para saber mais, acesse nossa Política de Privacidade.<br></br>Ao clicar em &quot;Enviar&quot;, você concorda em permitir que a Koch Construtora armazene e processe dos dados pessoais fornecidos por você para a finalidade informada.</label>
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
`;