import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "./components/pages/HomePage"
import Header from "./components/partials/Header"


const ApplicationRouter = () => (
  <div className="main-component">
    <div className="component-container d-flex align-items-center">
      <div className="container-fluid px-0">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </div>
  </div>
)

export default ApplicationRouter
