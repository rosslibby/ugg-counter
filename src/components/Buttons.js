import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../actions/index'

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: count => dispatch(incrementCounter(count)),
    decrementCounter: count => dispatch(decrementCounter(count))
  }
}

class ConnectedButtons extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this._increment = this._increment.bind(this)
    this._decrement = this._decrement.bind(this)
  }

  _increment() {
    let { count } = this.state
    count++
    this.props.incrementCounter(count)
    this.setState({ count })
  }

  _decrement() {
    let { count } = this.state
    count--
    this.props.decrementCounter(count)
    this.setState({ count })
  }

  render() {
    return (
      <div className="buttons">
        <button
          className="buttons__button buttons__button--minus"
          onClick={this._decrement}>-</button>
        <button
          className="buttons__button buttons__button--plus"
          onClick={this._increment}>+</button>
      </div>
    )
  }
}

const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons)
export default Buttons
