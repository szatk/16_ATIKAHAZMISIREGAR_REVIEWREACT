import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changed, reset, touched, findAllInvalid } from '../store/contact'
import { useHistory } from 'react-router-dom'

import '../assets/CSS/contact.css'
import poster from '../assets/Pict/charles-rRWiVQzLm7k-unsplash.jpg'
import logo from '../assets/Pict/logo-ALTA-v2.png'


export default function ContactUs() {
  const contact = useSelector((state) => state.contact)
  //baris 12 useselector nerima func untuk askses redux pada atribut contact (baris 32, index.js)
  const dispatch = useDispatch()
  //usedispatcg mereturn fungsi sehingga bisa dispatch / meneruskan ke reduce
  const history = useHistory()
  //usehistory adalah hook yg disediakan react-router-dom supaya dpt objek histori 
  //history adlh objek yg disediakan oleh react-router-dom untuk manipulasi link(url) misalkan redirect/ push link baru di line 51

  //21 extract name value drari form input user
  function formChangedHandler(e) {
    const { name, value } = e.target
    dispatch(changed({ name, value }))
  }

  //28 fungsi yang dijalankan ketika disentuh user
  //e.target objek bawaan js yg berisi field name
  function touchedHandler(e) {
    const { name } = e.target
    dispatch(touched({ name }))
  }

//prevent default mencegah form tidak request ke server sehingga halaman web tdk reload
//dan kode dibawah line 33 dpt dieksekusi dgn bnr
//is valid ngecek input user yg g valid
  function submitHandler(e) {
    e.preventDefault()
    let isValid = true

    //untuk ngecek setiap field pada form valid atau tdk 
    for (const field in contact) {
      const input = contact[field]

      if (input.err || (input.required && !input.value)) {
        isValid = false
        break
      }
    }

    //when valid maka isvalid true, if not isvalid false
    !isValid && alert('Form tidak valid! Pastikan field terisi dengan benar')
    isValid ? history.push('/review') : dispatch(findAllInvalid())
  }

  // * useEffect ini akan dijalankan 1x saja
  // Docs react-redux bilang kalau dispatch itu akan selalu sama valuenya
  // Selama store kita ngga berubah (reducernya ngga berubah).

  //useeffect when hal dirender pertama x redux akan bernilai inisial value (contact.js line 10) karena mendispatch action reset
  //act reset (contact.js line 65)
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  //untuk ngerender kode html di bawah pada hal web (dom)
  return (
    <main>
      <div className="container-content-image">
        <img className="content-image bg-img" src={poster} alt="poster" />
        <div className="content-image backrop-img"></div>
        <img className="content-image logo" src={logo} alt="logo" />
      </div>

      <div className="content-form">
        <h2>Contact Us</h2>
        <form action="/" method="post" autoComplete="off">
          <div className="mb-2">
            <label htmlFor="fullname" className="form-label">
              Full Name
              <span>*</span>
            </label>
            <input
              value={contact.fullname.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="fullname"
              id="fullname"
              type="text"
              className={`${
                contact.fullname.err && contact.fullname.touched
                  ? 'errField'
                  : ''
              } form-control form-control-sm`}
              placeholder="Your full name here..."
            />
            <p
              className={`${
                contact.fullname.err && contact.fullname.touched
                  ? 'show'
                  : 'hide'
              } errMessage`}
            >
              {contact.fullname.errMessage}
            </p>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
              <span>*</span>
            </label>
            <input
              value={contact.email.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="email"
              id="email"
              type="email"
              className={`${
                contact.email.err && contact.email.touched ? 'errField' : ''
              } form-control form-control-sm`}
              placeholder="example@mail.com"
            />
            <p
              className={`${
                contact.email.err && contact.email.touched ? 'show' : 'hide'
              } errMessage`}
            >
              {contact.email.errMessage}
            </p>
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone Number
              <span>*</span>
            </label>
            <input
              value={contact.phone.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="phone"
              id="phone"
              type="text"
              className={`${
                contact.phone.err && contact.phone.touched ? 'errField' : ''
              } form-control form-control-sm`}
              placeholder="0812xxxxxxxx"
            />
            <p
              className={`${
                contact.phone.err && contact.phone.touched ? 'show' : 'hide'
              } errMessage`}
            >
              {contact.phone.errMessage}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="form-label">
              Nationality
            </label><br/>
            <select
              value={contact.nationality.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="nationality"
              id="nationality"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Filipina">Filipina</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div><br/>

          <div className="mb-2">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              value={contact.message.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="message"
              id="message"
              className="form-control form-control-sm"
              rows="3"
              placeholder="Enter your message here..."
            ></textarea>
          </div>

          <div className="container-my-button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn my-button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}