import {
  blogInfo,
  blog,
  meta
} from './data';
import { BlogPage } from './blogPage';

export async function generateMetadata() {
  return {
    title:meta.title,
    description:meta.description,
      openGraph: {
        title:meta.title,
        description:meta.description,
      },
  }
}

export default function BlogPageWrapper() {
  return (
      <BlogPage
        blogInfo={blogInfo}
        blog={blog}
      />
  );
}