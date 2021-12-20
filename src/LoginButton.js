import React from 'react'
class LoginButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    console.log(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default LoginButton
