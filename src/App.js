import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './Login'
import Header from './Header'
import Class from './Classess'
import Products from './Products'
import About from './About'

import './App.css'

const App = () => (
  <BrowserRouter>
  
  <Switch>
      <Route exact path="/" component={Class} />
      <Route path="/product" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/login" component={LoginForm} />
  </Switch>
  </BrowserRouter>
)

export default App