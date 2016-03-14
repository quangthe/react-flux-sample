'use strict';

import React from 'react';
import Instance from '../Instance';

export default class InstanceList extends React.Component {
  state = {
    instances: [
      {
        id: '1',
        name: 'Public instance 1',
        version: '1',
        status: 'ok'
      },
      {
        id: '2',
        name: 'Public instance 2',
        version: '2',
        status: 'ok'
      },
      {
        id: '3',
        name: 'Public instance 3',
        version: '2',
        status: 'ok'
      }
    ]
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.instances.map((value, key) =>
              <Instance key={key} id={value.id}
                name={value.name} version={value.version}
                status={value.status}/>
            )
          }
        </ul>
      </div>
    );
  }
}
