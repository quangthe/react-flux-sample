import Space from '../Space';

export default class SpaceList extends React.Component {
  static propTypes = {
    list: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let $list = (
      this.props.list.map((item, key) =>
        <Space name={item.name} key={key} id={item.id} />
      )
    );

    return (
      <ul className="c-space-list">
        {$list}
      </ul>
    );
  }
}
