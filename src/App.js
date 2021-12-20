import React from 'react'
import Clock from './Clock'
import LoginButton from './LoginButton'
//Class Base Component
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <span>Hello {this.props.name}!</span>
        <App2 name={this.props.name} />
        <Clock /> */}
        <LoginButton />
      </div>
    )
  }
}

const App2 = (props) => {
  return (
    <div>
      <button onClick={Boom}>{props.name}</button>
    </div>
  )
}

const Boom = () => {
  console.log('BOOM')
}

export default App
