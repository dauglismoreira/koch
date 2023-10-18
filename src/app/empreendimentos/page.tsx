import fetchData from '@/helpers/fetchData';
import getStorageFile from '@/helpers/getStorageFile';
import Dump from '@/impacte/Dump';
import List from './List';
import { situationOptions } from './data';

  export async function generateMetadata() {
    const data = await  fetchData('empreendimentos')
  
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
  

  export default async function EnterprisesPageWrapper() {
    const data = await  fetchData('empreendimentos-feed')

    return (
      <>
        {/* <Dump obj={data} /> */}
        <List cities={data.cities} status={situationOptions}/>
      </>  
    );
}