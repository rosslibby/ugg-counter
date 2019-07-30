import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const ConnectedCounter = ({ count }) => (
  <div>
    <h2>{count}</h2>
  </div>
)

const Counter = connect(mapStateToProps)(ConnectedCounter)
export default Counter
