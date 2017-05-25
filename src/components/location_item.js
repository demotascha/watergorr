import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/locations';

class LocationItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.location.name}
      </li>
    );
  }
}

export default connect(null, actions)(LocationItem);
