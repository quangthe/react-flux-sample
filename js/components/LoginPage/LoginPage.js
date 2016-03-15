'use strict';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Handle validation here')
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="p-login">
        <div className="row small-8 medium-4">
          <h1 className="text-center">User login</h1>

          <form action="" className="small-8 small-centered" onSubmit={this.onSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="password"/>
            <input type="submit" className="button" value="Login"/>
          </form>
        </div>
      </div>
    );
  }
}
