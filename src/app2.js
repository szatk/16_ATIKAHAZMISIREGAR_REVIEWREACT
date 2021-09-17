/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import logo from './logo.svg';
import './App2.css'

function App2(){
    return(
        <><div className="App2">
            <div className="container">
                <div className="gambar">
                    <img src={require('./assets/logo-ALTA-v2.png').default} />.

                </div>
            </div>
        </div>
        
        <div className="formulir">
            <form className="isi formulir">
                <p>Contact Us</p>

                Full Name<br/>.
                <input type="text" name="nama1" placeholder="Your full name here.."/>.<br/><br/>

                Email Adress<br/>.
                <input type="text" name="e-mail" placeholder="example@domain.com"/>.<br/><br/>

                Phone Number<br/>.
                <input type="text" name="telpon" placeholder="0 87362 xxxxxx"/>.<br/><br/>

                Nationality:<br/>.
                <select name="negara">
                    <option id="pilih" value="pilih" disable selected hidden>Selected</option>
                    <option value="indo">Indonesia</option>
                    <option value="korean">Korea</option>
                    <option value="chinese">China</option>
                </select>
            <br/>.<br/>.

            Message<br/>
            <textarea name="bio" rows="10" placeholder="Your message here.."></textarea><br/><br/><br/>

            <a href="./assets/contact.html" className="button">Submit</a>
           
            </form>
            </div></>
    );
}

export default App2;