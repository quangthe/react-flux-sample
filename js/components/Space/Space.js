import React from 'react';
import InstanceList from '../InstanceList';

export default class Space extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    name: 'Live Site'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <InstanceList/>
      </div>
    )
  }
}
