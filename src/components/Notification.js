import React, { Component } from 'react'
import { css } from 'emotion'

export default class Notification extends Component {
  render() {
    if (this.props.show) {
      return (
        <div>
          Likes updated!
          <button onClick={this.props.onClose}>Ok</button>
        </div>
      )
    } else {
      return null
    }
  }
}
