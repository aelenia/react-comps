import React, { Component } from 'react'
import Quote from './components/Quote'
import Notification from './components/Notification'
import { css } from 'emotion'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalLikes: 0,
      showNotification: false,
      quotes: [
        {
          id: 0,
          text: 'Cat ipsum',
          author: 'Garfield',
          likes: 0,
        },
        {
          id: 1,
          text: 'Dog ipsum',
          author: 'Odie',
          likes: 0,
        },
      ],
    }
  }

  increaseLikes(id) {
    const foundQuoteIndex = this.state.quotes.findIndex(
      quote => quote.id === id
    )
    const foundQuote = this.state.quotes[foundQuoteIndex]
    const startOfNewArray = this.state.quotes.slice(0, foundQuoteIndex)
    const endOfNewArray = this.state.quotes.slice(foundQuoteIndex + 1)
    const newObject = { ...foundQuote, likes: foundQuote.likes + 1 }
    this.setState({
      quotes: [...startOfNewArray, newObject, ...endOfNewArray],
      totalLikes: this.state.totalLikes + 1,
    })
  }

  closeNotification() {
    this.setState({ showNotification: false })
  }

  renderQuotes(quote) {
    return this.state.quotes.map(quote => (
      <Quote
        key={quote.id}
        text={quote.text}
        author={quote.author}
        likes={quote.likes}
        onLike={e => this.increaseLikes(quote.id)}
      />
    ))
  }

  renderNotification() {
    return (
      this.state.showNotification && (
        <Notification
          show={this.state.showNotification}
          onClose={e => closeNotification()}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.totalLikes}</h1>
        {this.renderQuotes()}
        {this.renderNotification()}
      </div>
    )
  }
}

export default App
