import { all, call, put, takeLatest } from "redux-saga/effects"
import { createAction, handleActions } from "redux-actions"
import { getCharacters } from "../sagas/characters"

// Actions
export const FETCH_CHARACTERS_REQUEST = "entertainment/character/FETCH_CHARACTERS_REQUEST"
export const FETCH_CHARACTERS_REQUEST_SUCCEED = "entertainment/character/FETCH_CHARACTERS_REQUEST_SUCCEED"
export const FAILED_FETCH_CHARACTERS_REQUEST = "entertainment/character/FAILED_FETCH_CHARACTERS_REQUEST"

// Initial state
export const getInitialState = () => ({
  fetching: false,
  characters: [],
  error: null
})

// Reducer
const reducer = handleActions(
  {
    [FETCH_CHARACTERS_REQUEST]: (state) => {
      return {
        ...state,
        fetching: true
      }
    },
    [FETCH_CHARACTERS_REQUEST_SUCCEED]: (state, action) => {
      const { data } = action.payload;
      return {
        ...state,
        characters: data,
        fetching: true
      }
    },
    [FAILED_FETCH_CHARACTERS_REQUEST]: (state) => {
      return {
        ...state,
        error: "Doesn't get the characters",
        fetching: true
      }
    },
  },

  getInitialState()
)

export default reducer

// Actions creators
export const requestCharacters = createAction(FETCH_CHARACTERS_REQUEST)
export const requestCharactersSucceed = createAction(FETCH_CHARACTERS_REQUEST_SUCCEED)
export const characterRequestFailed = createAction(FAILED_FETCH_CHARACTERS_REQUEST)

// Fetch Character Saga
export function* fetchCharacterSaga() {
  try {
    const payload = yield call(getCharacters)
    yield put(requestCharactersSucceed(payload))
  } catch (error) {
    yield put(characterRequestFailed(error))
  }
}

// Character Saga
export function* characterSaga() {
  yield all([
    takeLatest(FETCH_CHARACTERS_REQUEST, fetchCharacterSaga),
  ])
}
