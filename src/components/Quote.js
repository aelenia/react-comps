import React, { Component } from 'react'
import { css } from 'emotion'

export default class Quote extends Component {
  render() {
    return (
      <div>
        <q>{this.props.text}</q> <br />
        <i>- {this.props.author}</i>
        <button onClick={e => this.props.onLike()}>
          Like ({this.props.likes})
        </button>
      </div>
    )
  }
}
