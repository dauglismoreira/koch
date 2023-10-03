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
    height: 40%;
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
`;

const Content = styled.div`
    height:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;
    padding:20px  0 0;
`;

const Name = styled.div`
    h3 {
        color:var(--text-primary);
        font-size:var(--small-title-size);
        letter-spacing:0px;
        font-weight:var(--big-title-weight);
        padding-top:10px;
        padding-right:30px;
    }
`;

const Text = styled.div`
    color:var(--text-secondary);
    font-size:var(--desktop-text-size);
    line-height:1.4;
    padding-bottom:20px;
    padding-right:20px;

    @media(max-width:768px){
        font-size:var(--desktop-text-size);
    }
`;

const Link = styled.div`
     color:var(--text-primary);
     font-size:var(--buttons-size);
     cursor:pointer;
     font-weight:var(--buttons-weight);
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
    padding:24px 24px 32px;
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

      ${Cover}{
            &:hover::before {
                transform: scale(1.04);
            }
        }
    }


`;
