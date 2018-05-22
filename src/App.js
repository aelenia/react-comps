import React, { Component } from 'react'
import Quote from './components/Quote'

class App extends Component {
  render() {
    return (
      <div>
        <Quote text="Cat ipsum" author="Garfield" />
        <Quote text="Dog ipsum" author="Odie" />
      </div>
    )
  }
}

export default App
