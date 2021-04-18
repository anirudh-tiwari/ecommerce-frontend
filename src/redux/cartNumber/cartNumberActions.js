import { INCREMENT } from './cartNumberTypes'
import { DECREMENT } from './cartNumberTypes'

export const increment = () => {
   return {
      type: INCREMENT
   }
}

export const decrement = () => {
   return {
      type: DECREMENT
   }
}


