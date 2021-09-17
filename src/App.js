/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import logo from './logo.svg'
import './App.css'

function App(){
  return (

    <div className="App">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid shadow-sm sticky-header">
              <a class="nav-logo" href="#.."><img src={require("./assets/logo-ALTA.png").default}></img></a>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#..">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#.." >ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#.." >EXPERIENCES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">CONTACT</a>
                </li>   
              </ul>
              </div>
          </nav>
        </header>

      <content>
      <div class="container-fluid bg-image"></div>
        <div class="content">
            <div class="row">
                <div class="col-12">
                </div>
                </div>
            </div>

        <div>
          <title>CSS Background Image</title>
          <link rel="assets/Home.css" href="Home.css"></link>
        </div>
        
        
        <div class="header-container">
          <div class="row">
            <div class="col-4">
              <img src="./assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" alt=".." width="355px" height="355px"></img>
          </div> 
        </div>
      </div>

        <div className="nama">
          <h5>Hi, my name is</h5> <br/>.
          <h1>Anna Sullivan</h1>
          <p>I build thing for the web.</p>

          <a href="./assets/contact.html" className="button">Get In Touch</a>
        </div>
      </content>
    </div>
  );
}

export default App;