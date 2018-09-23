import { SET_CURRENT_TIME} from '../constants/ActionTypes'

const initialState = {
  title:"",
  currentTime:0
}

export default function player(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return {
        ...state, currentTime: action.time
      }

    default:
      return state
  }
}