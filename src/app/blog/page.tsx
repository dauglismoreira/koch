import {meta} from './data';
import List from "@/app/blog/List";

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
  return <List />
}