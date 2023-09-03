import {
    formInputs,
    contactInfo,
    itemSocialList,
    meta
  } from './data';
import { ContatoPage } from './contatoPage';

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

  export default function ContatoPageWrapper() {
    return (
        <ContatoPage
            formInputs={formInputs}
            contactInfo={contactInfo}
            itemSocialList={itemSocialList}
        />
    );
}