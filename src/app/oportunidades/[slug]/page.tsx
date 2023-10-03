// import { GetServerSidePropsContext } from 'next';
import { meta, enterprise } from './data';
import { EnterPage } from './opportunitiesPage';
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
//   const enterprise = findPostBySlug(slug);

//   if (!enterprise) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       enterprise,
//     },
//   };
// }

export default function OpportunityPageWrapper() {
  
  // const { enterprise } = props;

  return <EnterPage opportunity={enterprise[0]} />;
}