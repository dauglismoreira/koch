import styled from 'styled-components';
import {FaWhatsapp} from 'react-icons/fa';

interface ItemProps {
    number?: any;
}

export const CallNumber: React.FC<ItemProps> = ({number}) => {

    const formatPhoneNumber = (phoneNumber: string) => {
          const part1 = phoneNumber.substring(0, 2);
          const part2 = phoneNumber.substring(2, 7);
          const part3 = phoneNumber.substring(7, 11);
          return (
            <div>
              <span>{part1}</span>
              {part2}-{part3}
            </div>
          );
      };

    return(
        <Call>
            <small>ATENDIMENTO</small>
            <a href={`https://wa.me/55` + number} target="_blank"><FaWhatsapp/>{formatPhoneNumber(number)}</a>
        </Call>
    )
}

const Call = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    color:var(--text-white);
    font-size:12px;
    font-weight:300;

    & a {
        font-size:13px;
        display:flex;
        cursor:pointer;
    }

    & a span{
        font-size:12px;
        margin-right:5px;
    }
`;