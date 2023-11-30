import {contactInfo, formInputs, itemSocialList} from './data';
import {ContatoPage} from './contatoPage';
import fetchData from '@/helpers/fetchData';
import getStorageFile from '@/helpers/getStorageFile';

export async function generateMetadata() {
  const data = await  fetchData('contato')

    return {
      title:data.page?.title,
      description:data.page?.description,
        openGraph: {
          title:data.page?.title,
          description:data.page?.description,
          images: [{
            url: getStorageFile(data.page?.file?.path),
            width: data.page?.file?.width,
            height: data.page?.file?.height,
          },]
        },
    }
  }

  export default async function ContatoPageWrapper() {
    const data = await fetchData('contato')

    return (
      <>
        <ContatoPage
            formInputs={formInputs}
            contactInfo={contactInfo}
            itemSocialList={itemSocialList}
            data={data.page?.components[0]}
            dataForm={data.contact}
            dataLocal={data.page?.components[2]}
            dataValidate={data.page?.components[1]}
        />
      </>
    );
}