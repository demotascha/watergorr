
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 25.0470493, lng: 121.5151335},
    zoom: 15
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={25.0470493}
          lng={121.5151335}
          text={'Taipei'}
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
