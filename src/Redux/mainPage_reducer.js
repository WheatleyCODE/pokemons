import {
  FETCH_START,
  FETCH_SUCCSESS,
  FETCH_ERROR,
  ADD_OFFSET,
  FILTER_POKEMONS,
  ADD_FAVORITE,
} from './constants'

const initialState = {
  pokemons: [],
  filterPokemons: [],
  loading: true,
  offset: 30,
}

const mainPage_reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCSESS: {
      const prevPokemons = state.pokemons
      const newPokemons = [...prevPokemons, ...action.response]
      return {
        ...state,
        pokemons: newPokemons,
        loading: false,
      }
    }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
      }
    case ADD_OFFSET: {
      const prevOffset = state.offset
      const newOffset = prevOffset + action.num
      return {
        ...state,
        offset: newOffset,
      }
    }
    case FILTER_POKEMONS: {
      const prevPokemons = state.pokemons
      const newFilterPokemons = prevPokemons.filter((elem) => (
        elem.name.includes(action.str.toLowerCase())
      ))
      return {
        ...state,
        filterPokemons: newFilterPokemons,
      }
    }
    case ADD_FAVORITE: {
      const prevPokemons = state.pokemons
      const newPokemons = prevPokemons.map((elem) => {
        if (elem.id === action.id) {
          const newElem = { ...elem }
          newElem.isFavorite = !elem.isFavorite
          return newElem
        }
        return elem
      })
      return {
        ...state,
        pokemons: newPokemons,
      }
    }
    default:
      return state
  }
}

export default mainPage_reducer
