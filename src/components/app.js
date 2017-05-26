import _ from 'lodash';
import React, { Component } from 'react';
import * as actions from '../actions/locations';
import { connect } from 'react-redux';
import LocationsItem from './location_item';

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  renderLocations() {
    // console.log(this.props.locations);
    return _.map(this.props.locations, (location, key) => {
      return <LocationsItem key={key} location={location} id={key} />
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

export default connect(mapStateToProps, actions)(App)
