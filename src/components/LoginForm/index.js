import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isMismatch: false, errMsg: ''}

  onLoginFail = errMsg => {
    this.setState({isMismatch: true, errMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onLoginFail(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isMismatch, errMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-image-small"
            alt="website login"
          />
          <form onSubmit={this.submitForm} className="form-container">
            <label htmlFor="username" className="label-text">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              onChange={this.onChangeUsername}
              className="input-element"
              value={username}
              placeholder="Username"
            />
            <br />
            <label htmlFor="password" className="label-text">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              className="input-element"
              placeholder="Password"
            />
            <div>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            {isMismatch && <p className="error-message">{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
