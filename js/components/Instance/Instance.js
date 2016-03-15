'use strict';

import React from 'react';

export default class Instance extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <li className="c-instance">
        <div className="small-6 column">{this.props.name}</div>
        <div className="small-3 column">{`v${this.props.version}`}</div>
        <div className="small-3 column">{this.props.status}</div>
      </li>
    );
  }
}
