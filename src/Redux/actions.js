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
    dispatch(fetchPokemonsStart())
    try {
      const response = await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      const pokemons = []
      const promises = response.data.results.map((elem) => {
        return Axios.get(elem.url)
      })
      for await (const promise of promises) {
        pokemons.push(promise.data)
      }
      dispatch(fetchPokemonsSuccess(pokemons))
    } catch (error) {
      dispatch(fetchPokemonsError(error))
    }
  }
)
