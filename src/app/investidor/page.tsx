import { InvestorPage } from './investorPage';
import {
    formInputs,
    aboutInfo,
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

  export default function InvestorPageWrapper() {
    return (
        <InvestorPage
            formInputs={formInputs}
            aboutInfo={aboutInfo}
        />
    );
}