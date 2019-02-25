import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export const loadState = () => {
  try {
      const serializedState = localStorage.getItem('state');
    if ( serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
    
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
  }
}

const initialState = {  cartCount: 0, 
                        products: [], 
                        total: 0 };

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
        cartCount: state.cartCount + 1,
        products: state.products.concat(action.payload),
        total:  state.total + action.payload.price
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        cartCount: state.cartCount - 1,
        products: state.products.filter((product, index) => index !== action.index),
        total:  state.total - action.price
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
export const incrementCartCount = ( product ) => (dispatch) => {
  return dispatch({ type: actionTypes.INCREMENT, payload: product })
}

export const decrementCartCount = (index, price) => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT, index: index, price: price })
}

export const resetCartCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (state = initialState) {
  //state = loadState();
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
