import Axios from 'axios'
import {
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
  ADD_OFFSET,
  FILTER_POKEMONS,
  ADD_FAVORITE,
} from './constants'

export function setFavoriteAC(id) {
  return {
    type: ADD_FAVORITE,
    id,
  }
}

export function filterPokemonsAC(str) {
  return {
    type: FILTER_POKEMONS,
    str,
  }
}

export function addOffsetAC(num) {
  return {
    type: ADD_OFFSET,
    num,
  }
}

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

export const fetchPokemonsAC = (limit, offset) => (
  async (dispatch) => {
    dispatch(fetchPokemonsStart())
    try {
      const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      const pokemons = []
      const promises = response.data.results.map((elem) => (
        Axios.get(elem.url)
      ))
      for await (const promise of promises) {
        promise.data.isFavorite = false
        pokemons.push(promise.data)
      }
      dispatch(fetchPokemonsSuccess(pokemons))
    } catch (error) {
      dispatch(fetchPokemonsError(error))
    }
  }
)
