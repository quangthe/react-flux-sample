'use strict';

const React = require('react');

export default class Instance extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <li>
        <div>{this.props.name}</div>
        <div>v{this.props.version}</div>
        <div>{this.props.status}</div>
      </li>
    );
  }
}
