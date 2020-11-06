import {
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
} from './constants'

const initialState = {
  pokemons: [
  ],
  loading: true,
}

const mainPage_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCSESS:
      return {
        ...state,
        pokemons: action.response,
        loading: false,
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default mainPage_reducer
