import { InvestorPage } from './investorPage';
import {
    formInputs,
    aboutInfo
  } from './data';
  import fetchData from '@/helpers/fetchData';
  import Dump from '@/impacte/Dump';
import getStorageFile from '@/helpers/getStorageFile';

export async function generateMetadata() {
  const data = await  fetchData('seja-um-investidor')

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

  export default async function InvestorPageWrapper() {
    const data = await  fetchData('seja-um-investidor')
    
    return (
      <>
        {/* <Dump obj={data} /> */}
        <InvestorPage
            formInputs={formInputs}
            aboutInfo={aboutInfo}
            data={data.page.components[0]}
            dataForm={data.contact}
            dataValidate={data.page.components[1]}
        />
      </>  
    );
}