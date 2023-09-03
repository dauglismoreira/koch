import {
    aboutInfo,
    formInputsLeft,
    formInputsRight,
    meta
  } from './data';
import { ExchangePage } from './exchangePage';

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

  export default function ExchangePageWrapper() {
    return (
        <ExchangePage
            aboutInfo={aboutInfo}
            formInputsLeft={formInputsLeft}
            formInputsRight={formInputsRight}
        />
    );
}