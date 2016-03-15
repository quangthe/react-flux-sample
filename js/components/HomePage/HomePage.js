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
      <div className="p-home">
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>{this.state.productName}</h1>
            <h2 className="subheader">Setup</h2>
          </div>
        </div>

        <div className="row small-12 medium-8 large-6 env">
          <div><Environment name="Live" /></div>
          <div><Environment name="QA" /></div>
          <div><Environment name="Development" /></div>
        </div>
      </div>
    )
  }
}
