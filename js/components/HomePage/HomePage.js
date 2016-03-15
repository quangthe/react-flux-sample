import EnvironmentList from '../EnvironmentList';

export default class HomePage extends React.Component {
  state = {
    productName: 'Corporate Site',
    envList: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.getJSON('/api/env-list', (data) => {
      this.setState({
        envList: data
      })
    });
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
        <EnvironmentList list={this.state.envList}/>
      </div>
    )
  }
}
