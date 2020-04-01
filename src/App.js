import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./AppRouter"

export default class Application extends React.Component {

  render() {
    return (
      <Router>
        <AppRouter />
      </Router>
    )
  }
}
