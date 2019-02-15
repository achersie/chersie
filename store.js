import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  cartCount: 0
}

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        cartCount: state.cartCount + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        cartCount: state.cartCount - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        cartCount: exampleInitialState.cartCount
      })
    default:
      return state
  }
}

// ACTIONS
export const incrementCartCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCartCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCartCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (state = initialState) {
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
