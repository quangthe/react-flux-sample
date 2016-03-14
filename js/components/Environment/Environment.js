import React from 'react';
import Space from '../Space';

export default class Environment extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    name: 'Live'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>

        <ul className="spaces">
          <Space name="Corporate Site" />
          <Space name="Live Site" />
          <Space name="QA Site" />
        </ul>
      </div>
    )
  }
}
