import React from 'react';
import Environment from '../Environment';

export default class HomePage extends React.Component {
  state = {
    productName: 'Corporate Site'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.state.productName}</h1>
        <h2>Setup</h2>

        <ul className="env">
          <li><Environment name="Live" /></li>
          <li><Environment name="QA" /></li>
          <li><Environment name="Development" /></li>
        </ul>
      </div>
    )
  }
}
