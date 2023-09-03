// import { GetServerSidePropsContext } from 'next';
import { meta, posts } from './data';
import { PostPage } from './postPage';
// import { findPostBySlug } from './data';

 export async function generateMetadata() {
   return {
     title: meta.title,
     description: meta.description,
     openGraph: {
       title: meta.title,
       description: meta.description,
     },
   };
 }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const slug = context.query.slug || null;
//   const post = findPostBySlug(slug);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       post,
//     },
//   };
// }

export default function PostPageWrapper(props: any) {
  
  const { post } = props;

  return <PostPage post={posts[0]} />;
}