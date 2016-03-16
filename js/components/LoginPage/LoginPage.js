'use strict';

export default class LoginPage extends React.Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    let errorKey;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username === '' || password === '') {
      errorKey = 'requiredField';
    }

    if (errorKey !== '') {
      this.setState({
        error: initData.messages[errorKey]
      });
    }

    // TODO: call API to login
  };

  render() {
    let errorClass = cx({
      'error': true,
      'is-visible': this.state.error
    });

    return (
      <div className="p-login">
        <div className="row small-8 medium-4">
          <h1 className="text-center">User login</h1>

          <form action="" className="small-8 small-centered" onSubmit={this.onSubmit}>
            <label className={errorClass}>{this.state.error}</label>
            <input type="text" name="username" ref="username" placeholder="Username" />
            <input type="password" name="password" ref="password" placeholder="Password" />
            <input type="submit" className="button" value="Login"/>
          </form>
        </div>
      </div>
    );
  }
}
