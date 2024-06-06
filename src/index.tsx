/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router'

import Home from './Home';
import About from "./About";
import ToolsRoute from "./ToolsRoute";


import "@picocss/pico"
import "./index.css"

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <ToolsRoute></ToolsRoute>
  </Router>
), root!);
