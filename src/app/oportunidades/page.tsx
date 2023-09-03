import {
    aboutInfo,
    citiesOptions,
    situationOptions,
    enterprises,
    meta
  } from './data';
import { OpportunitiesPage } from './opportunitiesPage';

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

  export default function OpportunitiesPageWrapper() {
    return (
        <OpportunitiesPage
            aboutInfo={aboutInfo}
            citiesOptions={citiesOptions}
            situationOptions={situationOptions}
            enterprises={enterprises}
        />
    );
}