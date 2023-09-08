import styled from 'styled-components';

export interface BlogCardProps {
    cover?: string;
    title?: string;
    content?: string;
    link?: string;
}

const MAX_TEXT_LENGTH = 60;

export const BlogCard: React.FC<{ data: BlogCardProps }> = ({ data }) => {
    const { cover, title, content, link } = data;

    const truncateText = (text: string | undefined, maxLength: number) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + '...';
        }
    };

    const truncatedContent = truncateText(content, MAX_TEXT_LENGTH);
    
    return (
        <Card>
            <a href={`./../blog/${link}`}><Cover
                image={cover || ''}
            ></Cover>
            <Content>
                <Name><h3>{title}</h3></Name>
                <Text><p>{truncatedContent}</p></Text>
                <Link>Leia mais</Link>
            </Content></a>
        </Card>
    );
}

const Cover = styled.div<{image : string}>`
    position: relative;
    height: 50%;
    transition: 0.3s ease-in-out;
    background: transparent;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${props => props.image}');
        background-size: cover;
        background-position: center center;
        transform-origin: center center;
        z-index: 0;
        transition: inherit;
    }

    &:hover::before {
        transform: scale(1.04);
    }
`;

const Content = styled.div`
    height:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;
    padding:20px  0 0;
`;

const Name = styled.div`
    h3 {
        color:var(--text-primary);
        font-size:1rem;
        text-transform:uppercase;
        letter-spacing:0px;
        font-weight:700;
        padding-top:10px;
        padding-right:30px;

        @media(max-width:768px){
            font-size:0.9rem;
        }
    }
`;

const Text = styled.div`
    color:var(--text-secondary);
    font-size:18px;
    line-height:1.4;
    padding-bottom:20px;
    padding-right:20px;

    @media(max-width:768px){
        font-size:0.9rem;
    }
`;

const Link = styled.div`
     color:var(--text-primary);
     font-size:12px;
     cursor:pointer;
     font-weight:600;
     text-transform:uppercase;
     position:relative;

     &::after {
        content:'';
        width:0%;
        height:1px;
        background-color:var(--text-primary);
        position:absolute;
        bottom:-5px;
        left:0px;
        transition:0.3s;
      }

`;

const Card = styled.div`
    width:100%;
    border:solid 1px var(--border-grey);
    padding:40px;
    height:515px;

    @media(max-width:768px){
        height:515px;
        margin:auto;
        width:85%;
    }
    &:hover {
        ${Link}{
            color:var(--text-primary);
    
            &::after {
                width:100%;
            }
      }
    }


`;
