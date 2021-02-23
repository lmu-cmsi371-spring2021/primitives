/**
 * This React app serves as a very thin “wrapper” around what is otherwise pure three.js code.
 * Although various “React three.js components” are available, these can get complicated and
 * possibly overly opinionated for beginners. We take the approach here of separating React and
 * three.js code from each other as much as possible.
 */
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

import './App.css'

import NanoshopDemo from './NanoshopDemo'
import NanoshopNeighborhoodDemo from './NanoshopNeighborhoodDemo'
import PrimitivesDemo from './PrimitivesDemo'

const App = () => {
  return (
    <article className="App">
      <Router>
        <nav>
          <NavLink activeClassName="current" to="/primitives">
            Primitives
          </NavLink>

          <NavLink activeClassName="current" to="/nanoshop">
            Nanoshop
          </NavLink>

          <NavLink activeClassName="current" to="/nanoshop-neighborhood">
            Nanoshop Neighborhood
          </NavLink>
        </nav>

        <main>
          <Switch>
            <Route path="/primitives" component={PrimitivesDemo} />
            <Route path="/nanoshop" component={NanoshopDemo} />
            <Route path="/nanoshop-neighborhood" component={NanoshopNeighborhoodDemo} />
          </Switch>
        </main>
      </Router>
    </article>
  )
}

export default App
