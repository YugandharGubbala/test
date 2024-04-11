import {Component} from 'react'

import './index.css'



class LoginForm extends Component {
  
    gotoclass = () => {
        const {history} = this.props
        history.replace('/')
}

  render() {
    
    return (
      <div className="login-container">
        <form
          className="login-form-container "
          onSumbit={this.gotoclass}
        >
          
          
          <input
            className="form-input"
            type="text"
            
            placeholder="username"
            id="username"
          />
          <br />
          <br />
          
          <input
            className="form-input"
            type="password"
           
            placeholder="password"
            id="password"
          />
          <br />
          <br />
          <button className="form-submit-button" type="submit">
            Login
          </button>
          <p>don't have account? sign in</p>
        </form>
      </div>
    )
  }
}

export default LoginForm