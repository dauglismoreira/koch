import getStorageFile from '@/helpers/getStorageFile';
import {
    oportunitiesInfo,
    contactInfo,
    formInfo,
    formInputsLeft,
    formInputsRight,
    opportunitiesButtons,
  } from './data';
import { ServicePage } from './servicePage';
import fetchData from '@/helpers/fetchData';
import Dump from '@/impacte/Dump';

export async function generateMetadata() {
  const data = await  fetchData('nosso-time')

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

  export default async function ServicePageWrapper() {
    const data = await  fetchData('nosso-time')

    return (
      <>
        {/* <Dump obj={data} /> */}
        <ServicePage
              data={data.page.components}
              collaborators={data.collaborators}
              opportunitiesButtons={opportunitiesButtons}
              oportunitiesInfo={oportunitiesInfo}
              contactInfo={contactInfo}
              formInfo={formInfo}
              formInputsLeft={formInputsLeft}
              formInputsRight={formInputsRight}
              email_origin={data.contact.email}
          />
      </>

    );
}