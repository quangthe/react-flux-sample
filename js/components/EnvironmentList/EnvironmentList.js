import Environment from '../Environment';

export default class EnvironmentList extends React.Component {
  static propTypes = {
    list: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let envList = (
      this.props.list.map((item, key) =>
        <Environment name={item.name} key={key}
          spaces={item.spaces}/>
      )
    );

    return (
      <div className="row small-12 medium-8 large-6 c-environment-list">
        {envList}
      </div>
    )
  }
}
