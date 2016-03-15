'use strict';

import Instance from '../Instance';

export default class InstanceList extends React.Component {
  static propTypes = {
    list: React.PropTypes.array.isRequired
  };

  componentDidMount() {
  }

  render() {
    var $list = (
      this.props.list.map((value, key) =>
        <Instance key={key} id={value.id}
          name={value.name} version={value.version}
          status={value.status}/>
      )
    );

    return (
      <ul className="c-instance-list">{$list}</ul>
    );
  }
}
