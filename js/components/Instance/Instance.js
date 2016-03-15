'use strict';

export default class Instance extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
  };

  render() {
    let status = this.props.status === 'ok' ? 'check' : 'close';

    return (
      <li className="c-instance">
        <div className="small-6 column">{this.props.name}</div>
        <div className="small-3 column">{`v${this.props.version}`}</div>
        <div className="small-3 column">
          <i className={`fa fa-${status}`}></i>
        </div>
      </li>
    );
  }
}
