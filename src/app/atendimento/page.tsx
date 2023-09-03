import {
    oportunitiesInfo,
    contactInfo,
    formInfo,
    brokersList,
    formInputsLeft,
    formInputsRight,
    phone,
    email,
    street,
    city,
    opportunitiesButtons,
    meta
  } from './data';
import { ServicePage } from './servicePage';

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

  export default function ServicePageWrapper() {
    return (
        <ServicePage
            opportunitiesButtons={opportunitiesButtons}
            oportunitiesInfo={oportunitiesInfo}
            contactInfo={contactInfo}
            formInfo={formInfo}
            brokersList={brokersList}
            formInputsLeft={formInputsLeft}
            formInputsRight={formInputsRight}
            phone={phone}
            email={email}
            street={street}
            city={city}
        />
    );
}