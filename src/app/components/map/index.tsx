import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { MdOutlinePlace } from "react-icons/md";

interface LocationPinProps {
    lat: number;
    lng: number;
}

  const LocationPin: React.FC<LocationPinProps> = () => (
    <Pin>
      <MdOutlinePlace color="var(--text-primary)"/>
    </Pin>
  )

interface MapsProps {
    latI: number;
    lngI: number;
    zoomLevel: number;
  }


  const Maps: React.FC<MapsProps> = ({ latI, lngI, zoomLevel }) => (
  < div className="map" >
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'CHAVE DE API' }}
        defaultCenter={{ lat: latI, lng: lngI }}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={latI}
          lng={lngI}
        />
      </GoogleMapReact>
    </MapContainer>
  </div >
)

export default Maps;

const MapContainer = styled.div`
  width: calc(100% - 20px);
  margin:auto;
  height:300px;

  @media screen and (min-width: 799px) {
    height: 480px;
    width: 100%;
  }
`;

const Pin = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    margin-top:-30px;
    margin-left:-30px;
    font-size:40px;

    @media(min-width: 799px){
        width: 15vw;
    }
`;