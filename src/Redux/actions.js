import Axios from 'axios'
import {
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
} from './constants'

export function fetchPokemonsStart() {
  return {
    type: FETCH_START,
  }
}
export function fetchPokemonsSuccess(response) {
  return {
    type: FETCH_SUCCSESS,
    response,
  }
}
export function fetchPokemonsError(error) {
  return {
    type: FETCH_ERROR,
    error,
  }
}

export const fetchPokemonsAC = () => (
  async (dispatch) => {
    console.log('hellolololo')
    dispatch(fetchPokemonsStart())
    try {
      const response = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=60&offset=0')
      dispatch(fetchPokemonsSuccess(response.data.results))
    } catch (error) {
      dispatch(fetchPokemonsError(error))
    }
  }
)
