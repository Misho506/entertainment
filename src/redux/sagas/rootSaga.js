import { all } from "redux-saga/effects"
import { characterSaga } from "../modules/characters"

export default function* rootSaga() {
  yield all([
    characterSaga(),
  ])
}
