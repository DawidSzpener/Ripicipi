import * as actionTypes from './actions'

const initialState = {
  password: ''
}

console.log(initialState)

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.password
      }

    default:
      return state
  }
}

export default reducer
