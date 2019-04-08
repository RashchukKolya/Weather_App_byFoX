import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";


const google = window.google = window.google ? window.google : {}
// console.log(this.props.coord);
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSgVAgkMNsfgF-hGW1tvzY9zpvdUhC_f0&libraries=geometry,drawing,places",

    loadingElement: <div style={{ height: `100%`, width: `100%`}} />,
    containerElement: <div style={{ height: `95%`, width: `95%`, margin: `1% auto` }}/>,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
 
)((props) =>
  <GoogleMap onClick={props.markerClick}
    defaultZoom={12}
    center={{ lat: props.coord.lat, lng: props.coord.lon }}
    >
    <MarkerWithLabel 
          
      position={{ lat: props.coord.lat, lng: props.coord.lon }}
      labelAnchor={new google.maps.Point(0, 0)}
      >
      {<div className ='show'></div>}
    </MarkerWithLabel> 
    
     </GoogleMap>)
    
  
 

export default  MyMapComponent;