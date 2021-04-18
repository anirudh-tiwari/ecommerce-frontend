import { INCREMENT } from './cartNumberTypes'
import { DECREMENT } from './cartNumberTypes'

const initialState = {
   cartNumber: 0
}

const cartNumberReducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT: return { ...state, cartNumber: state.cartNumber + 1 }
      case DECREMENT: return { ...state, cartNumber: state.cartNumber - 1 }
      default: return state
   }
}

export default cartNumberReducer;