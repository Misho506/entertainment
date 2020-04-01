import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import serviceWorker from './serviceWorker'

import './assets/styles/main.scss'
class RootContainer extends React.Component {

  render() {
    return (
      <App />
    )
  }
}

export default RootContainer

ReactDOM.render(<RootContainer />, document.getElementById("root"))
serviceWorker()
