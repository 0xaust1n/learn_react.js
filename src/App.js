import React from 'react'
import Clock from './Clock'
//Class Base Component
class App extends React.Component {
  render() {
    return (
      <div>
        <span>Hello {this.props.name}!</span>
        <App2 name={this.props.name + '!'} />
        <Clock />
      </div>
    )
  }
}

const App2 = (props) => {
  return <div>Hello {props.name}!</div>
}



export default App
