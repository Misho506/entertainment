import { applyMiddleware, compose, createStore } from "redux"
import { createBrowserHistory } from "history"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import { routerMiddleware } from "connected-react-router"
import rootSaga from "./sagas/rootSaga"

import rootReducer from "./rootReducer"
export const history = createBrowserHistory()

function setupStore(initialState = {}) {

  const middlewares = []

  /*
   * The logger middleware is only enabled in development because there is a
   * memory leak related to allocating large strings but not subsequently
   * deallocating them.
   */
  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }
  const sagaMiddleware = createSagaMiddleware(),
    reduxRouterMiddleware = routerMiddleware(history)

  middlewares.push(reduxRouterMiddleware)
  middlewares.push(sagaMiddleware)

  const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export const store = setupStore()
