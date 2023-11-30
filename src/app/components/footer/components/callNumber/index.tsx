import styled from 'styled-components';
import {FaWhatsapp} from 'react-icons/fa';

interface ItemProps {
    number?: any;
    email?: string;
}

export const CallNumber: React.FC<ItemProps> = ({number, email}) => {

    const formatPhoneNumber = (phoneNumber: string) => {
          const part1 = phoneNumber?.substring(0, 2);
          const part2 = phoneNumber?.substring(2, 7);
          const part3 = phoneNumber?.substring(7, 11);
          return (
            <div>
              <span>{part1}</span>
              {part2}-{part3}
            </div>
          );
      };

    return(
        <Call>
            <a href={`https://api.whatsapp.com/send?phone=55` + number} target="_blank"><FaWhatsapp/>{formatPhoneNumber(number)}</a>
            <a href={`mailto:` + email} target="_blank">{email}</a>
        </Call>
    )
}

const Call = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    color:var(--text-white);
    font-size:var(--buttons-size);
    font-weight:300;
    gap:5px;

    & a {
        font-size:var(--buttons-size);
        display:flex;
        font-weight:500;
        cursor:pointer;
    }

    & a span{
        font-size:11px;
        margin-right:5px;
        margin-left:5px;
    }

    @media(max-width:768px){
        margin:20px 0;
        gap:15px;

    }
`;