import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Review from './Pages/Review.jsx'
import News from './Pages/News.jsx'

// switch untuk ngerender/memuat tampilan dari route yg lokasinya match
// route untuk mengarahkan user ke halaman yg sudah ditentukan dlm properti path
//fetch untuk ngambil data dari sumber lain
//pass untuk mengoper data dari 1 funct ke funct or class ke class
//exact untuk memuat sampai habis data yang ada "/"

function App() {
  return (
    <Switch>
      <Route exact path="/review" component={Review} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route exact path="/news" component={News} />
    </Switch>
  )
}

export default App