import { EnterprisePage } from './enterprisePage';
import {
    situationOptions,
    aboutInfo,
    citiesOptions,
    enterprises,
    meta
  } from './data';

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
  

  export default function EnterprisesPageWrapper() {
    return (
        <EnterprisePage
            situationOptions={situationOptions}
            aboutInfo={aboutInfo}
            citiesOptions={citiesOptions}
            enterprises={enterprises}
        />
    );
}