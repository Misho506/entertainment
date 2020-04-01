import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import characters from "./modules/characters"

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  characters,
})

export default rootReducer
