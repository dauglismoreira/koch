import styled from 'styled-components';


export interface PostRecommendedProps {
    image:string,
    title:string,
    url:string,
}

interface PostPageProps {
    data:PostRecommendedProps[];
}

export const RecommendedPosts: React.FC<PostPageProps> = ({data}) => {

    return (
        <Container>
            <Title>Recomendadas</Title>
            <LineDivider></LineDivider>
            {data && data.map((post, index) => (
                <PostContainer key={index}>
                    <Post>
                        <Cover background={post.image}></Cover>
                        <Info>
                            <PostTitle>{post.title}</PostTitle>
                            <Link href={post.url} target="_parent">LEIA MAIS</Link>
                        </Info>
                    </Post>
                    <LineDivider></LineDivider>
                </PostContainer>
            ))}
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin:75px 0;
    padding:0 20px;
`;

const Title = styled.div`
    font-size:14px;
    text-transform:uppercase;
    color:var(--text-secondary);
`;

const LineDivider = styled.div`
    width:100%;
    height:1px;
    background-color:var(--border-grey);
    margin:30px 0;
`;

const PostContainer = styled.div`
    width:100%;
`;

const Post = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`;

const Cover = styled.div<{background : string}>`
    border:solid 1px var(--border-grey);
    background-image:url('${props => props.background}');
    width:55px;
    height:55px;
    background-position:center;
    background-size:cover;
    margin-top:5px;
`;

const Info = styled.div`
    width:calc(100% - 55px);
`;

const PostTitle = styled.div`
    font-size:14px;
    color:var(--text-secondary);
    margin-bottom:10px;
`;

const Link = styled.a`
    font-size:13px;
    color:var(--text-primary);
    font-weight:500;
`;