import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
            // import { faChrome } from "fortawesome/free-brands-svg-icons/faChrome";
// import { faChrome } from '@fortawesome/free-brands-svg-icons/faChrome';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -0.28483,
      lng: 36.07004
    },
    zoom: 11
  };
  
  render() {
    return (
      <div style={{ height: '50vh', width: '100%', border: '#999 1px solid', marginBottom:'10px', alignContent:'center', backgroundColor:'#999'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'REACT_APP_GOOGLE_MAPS_API_KEY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lng={36.07004}
            lat={-0.28483}
            text="Google Map"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;