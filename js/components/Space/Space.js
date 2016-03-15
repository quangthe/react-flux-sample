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
      <div className="c-space">
        <h4>{this.props.name}</h4>
        <InstanceList/>
      </div>
    )
  }
}
