import InstanceList from '../InstanceList';

export default class Space extends React.Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  };

  state = {
    list: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.getJSON(`/api/space/${this.props.id}`, (data) => {
      this.setState({
        list: data
      })
    });
  }

  render() {
    return (
      <div className="c-space">
        <h4>{this.props.name}</h4>
        <InstanceList list={this.state.list}/>
      </div>
    )
  }
}
