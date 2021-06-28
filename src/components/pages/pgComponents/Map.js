import React, {useState} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import {Button, Image} from './MapStyle'

export const Map = React.memo(function Map() {
  const [viewport, setViewport] = useState({
    latitude:42.406162,
    longitude:-71.244749,
    width: "50vw",
    height: "60vh",
    zoom: 10
  })
  const lat = 42.406162
  const long = -71.244749

  const[labelDisplay, setLabelDisplay] = useState(false)

  const showDisplay = () => setLabelDisplay(true)
  const closeDisplay = () => setLabelDisplay(false)

  return (
    <ReactMapGL {...viewport}
    mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_API_KEY}
    mapStyle = "mapbox://styles/tshendevelopment/ckqgv0qnn0eo617nx8b9lkf0o"
    onViewportChange={viewport => {setViewport(viewport)}}>
    <Marker latitude = {lat}
    longitude = {long}>
      <Button onClick = {showDisplay}>
        <Image src="http://assets.stickpng.com/thumbs/5888925dbc2fc2ef3a1860ad.png" alt="map marker"/>
      </Button>
    </Marker>
    {labelDisplay && (
        <Popup latitude={lat} longitude={long} onClose={closeDisplay}>
          <img src="https://thumbs2.imgbox.com/00/d1/Mv8UIKP9_t.png" alt='Headquarters'/>
          <p>47 Lakeview Terrace, Waltham, MA 02451</p>
        </Popup>
      )}
    </ReactMapGL>
  )
})

export default Map