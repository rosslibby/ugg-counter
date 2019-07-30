import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants/action-types'
export const decrementCounter = count => {
  return {
    type: DECREMENT_COUNTER,
    count
  }
}
export const incrementCounter = count => {
  return {
    type: INCREMENT_COUNTER,
    count
  }
}
