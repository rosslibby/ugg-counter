import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants/action-types'

const initialState = {
  count: 0
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {
        count: action.count
      })
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        count: action.count
      })
    default:
      return state
  }
}

export default rootReducer
