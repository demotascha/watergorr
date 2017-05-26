
import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
const API_KEY = 'AIzaSyAzCmJkr6xIAA36jjN46kguaAWykHov0gE';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  render() {
    return (
        <GoogleMap
         bootstrapURLKeys={{key: API_KEY}}
         center={[59.938043, 30.337157]}
         zoom={9}>

         <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
        </GoogleMap>
    );
  }
}

export default SimpleMap;
