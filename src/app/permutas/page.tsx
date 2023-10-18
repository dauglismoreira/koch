import getStorageFile from '@/helpers/getStorageFile';
import {
    aboutInfo,
    formInputsLeft,
    formInputsRight
  } from './data';
import { ExchangePage } from './exchangePage';
import fetchData from '@/helpers/fetchData';
import Dump from '@/impacte/Dump';

export async function generateMetadata() {
  const data = await  fetchData('permutas')

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

  export default async function ExchangePageWrapper() {
    const data = await fetchData('permutas')

    return (
      <>
        {/* <Dump obj={data} /> */}

        <ExchangePage
            aboutInfo={aboutInfo}
            formInputsLeft={formInputsLeft}
            formInputsRight={formInputsRight}
            data={data.page.components[0]}
            dataForm={data.contact}
            dataValidate={data.page.components[1]}
        />
      </>  
    );
}