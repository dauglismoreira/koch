import fetchData from '@/helpers/fetchData';
import List from "@/app/blog/List";
import getStorageFile from '@/helpers/getStorageFile';

export async function generateMetadata() {
  const data = await  fetchData('blog')

    return {
      title:data.page.title,
      description:data.page.description,
        openGraph: {
          title:data.page.title,
          description:data.page.description,
          images: [{
            url: getStorageFile(data.page.file?.path),
            width: data.page.file?.width,
            height: data.page.file?.height,
          },]
        },
    }
  }

  export default function BlogPageWrapper() {

    return (
      <>
        {/* <Dump obj={data} /> */}
        {/* <BlogPage data={data.models.data} blogInfo={blogInfo}/> */}
        <List/>
      </>
    );
}