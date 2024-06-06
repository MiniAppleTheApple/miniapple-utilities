import type { Component } from "solid-js"

import { Route } from '@solidjs/router'

import RandomNumber from "./tools/RandomNumber"
import PageWrapper from "./PageWrapper"

const ToolsRoute: Component = () => (
  <Route path="/tools" component={PageWrapper}>
    <Route path="/random-number" component={RandomNumber}></Route>
  </Route>
)

export default ToolsRoute
