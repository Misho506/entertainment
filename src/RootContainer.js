import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import serviceWorker from './serviceWorker'
import { Provider } from "react-redux"
import { store } from "./redux/setupStore"

import './assets/styles/main.scss'
class RootContainer extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default RootContainer

ReactDOM.render(<RootContainer />, document.getElementById("root"))
serviceWorker()
