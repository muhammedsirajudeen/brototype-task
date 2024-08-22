import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

function MapComponent() {
  const position = { lat: 53.54992, lng: 10.00678 }

  return (
    <APIProvider apiKey={''}>
      <Map defaultCenter={position} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  )
}

export default MapComponent
