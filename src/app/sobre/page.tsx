import {
    aboutItemsAccordion,
    aboutInfo,
    aboutSecondInfo,
    meta
  } from './data';
import { AboutPage } from './aboutPage';


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
  

  export default function AboutPageWrapper() {
    return (
        <AboutPage
            aboutItemsAccordion={aboutItemsAccordion}
            aboutInfo={aboutInfo}
            aboutSecondInfo={aboutSecondInfo}
        />
    );
}