import _ from 'lodash';
import React, { Component } from 'react';
import * as actions from '../actions/locations';
import { connect } from 'react-redux';

class MapMainApp extends Component {
  state = { locations: '' };

  componentDidMount() {
    this.props.fetchLocations();
  }

  renderLocations() {
    return _.map(this.props.locations, (location, key) => {
      return <LocationsItem key={key} post={location} id={key} />
    });
  }

  render() {
    return (
      <div>
        <h4>Load Locations</h4>
        <ul className="list-group">
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { locations: state.locations };
}

export default connect(mapStateToProps, actions)(MapMainApp)
