import {
    aboutInfo,
    formInputs,
    meta
  } from './data';
import { SendWorkPage } from './sendWorkPage';

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

  export default function SendWorkPageWrapper() {
    return (
        <SendWorkPage
            aboutInfo={aboutInfo}
            formInputs={formInputs}
        />
    );
}