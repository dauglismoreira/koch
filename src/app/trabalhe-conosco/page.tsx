import getStorageFile from '@/helpers/getStorageFile';
import {
    aboutInfo,
    formInputs
  } from './data';
import { SendWorkPage } from './sendWorkPage';
import fetchData from '@/helpers/fetchData';
import Dump from '@/impacte/Dump';

export async function generateMetadata() {
  const data = await  fetchData('trabalhe-conosco')

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

  export default async function SendWorkPageWrapper() {
    const data = await fetchData('trabalhe-conosco')

    return (
      <>
        {/* <Dump obj={data} /> */}

        <SendWorkPage
            aboutInfo={aboutInfo}
            formInputs={formInputs}
            data={data.page.components[0]}
            dataForm={data.contact}
            dataValidate={data.page.components[1]}
        />
      </>  
    );
}