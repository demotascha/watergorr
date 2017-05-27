
import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as actions from '../actions/locations';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithStick from '././helps/marker_style';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  static propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    greatPlaces: PropTypes.array
  };

  static defaultProps = {
    center: [25.0470493, 121.5151335],
    zoom: 15
  };

  render() {
    const places =  _.map(this.props.locations, ( {id, name, ...coords} = place ) => {
      return (
        <MyGreatPlaceWithStick
          key={id}
          {...coords}
          text={name}
        />
      );
    });

    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {places}
      </GoogleMapReact>
    );
  }
}

function mapStateToProps(state) {
  return { locations: state.locations };
}

export default connect(mapStateToProps, actions)(GoogleMap)
