import SpaceList from '../SpaceList';

export default class Environment extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    spaces: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-environment">
        <h3>{this.props.name}</h3>
        <SpaceList list={this.props.spaces}/>
      </div>
    )
  }
}
