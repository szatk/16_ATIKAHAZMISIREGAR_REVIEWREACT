import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Review from './Pages/Review.jsx'


function App() {
  return (
    <Switch>
      <Route exact path="/review" component={Review} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route />
    </Switch>
  )
}

export default App