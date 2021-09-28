import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../Navbar'

import '../assets/CSS/news.css'
// patching biasa
// api dari google 
//export supaya bisa diimport ke hal lain
//konstanta/var namanya news, Set news adalah useState untuk merubah news
//useState untuk merubah news

export default function News() {
  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)

  //useEffect untuk memberikan efek pada komponen tertentu
  //async untuk menjalankan lebih dari 1 pekerjaan dalam 1 waktu, disini menjalankan func getNews
  //await untuk menunggu axios.get dijalanan sampai selesai
  //try sebagai blok kode yang dijalankan pertama kali ketika sebuah func dipanggil
  //catch blok kode yg dijalankan when dapat error pd try
  //results.slice untuk mengambil hasil dengan rentang array 0-5


  useEffect(() => {
    async function getNews() {
      try {
        const result = await axios.get(
          'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=64U3e8oy0NKoKhizZoBXnb7Jyi9gni39'
        )

         setNews(result.data.results.slice(0, 5))
      } catch (error) {
        setError(error)
      }
    }
    getNews()
  }, [])
//baris 38 seluruh useEffect disimpan dalam array

  return (
    //untuk mengembalikan nilai
    //ternary operation yg akan menjalankan statement disebelah kiri titik dua apabila kondisi bernilai true
    //kanan false
    //error=kondisi
    // kalau error akan muncul h3
    // kalau false/gdk error maka menjalankan news.map
    //
    <>
      <Navbar />
    {/* news?.map kalau ada isi maka akan diolah 1-1(map isinya) 
    n adalah props (seluruh data yg diambil dari news(mewakili news)), props yaitu data yg dipassing dari tempat lain*/}
    {/* n.url masuk di div key n.section*/}
    <div className="mycontainer">
        {error ? (
          <h3>Oops.. Something went wrong :(</h3>
        ) : (
          news?.map((n) => (
            <div key={n.url} className="mb-5">
              <p className="subjudul">{n.section}</p>
              <h2 className="judul">{n.title}</h2>

              <p className="author">{n.byline}</p>

              <div>
                <div className="imgContainer">
                  <img src={n.multimedia[0].url} alt="news" />
                  <p>{n.multimedia[0].caption}</p>
                </div>
              </div>
              <div className="berita">
                <p>{n.abstract}</p>
              </div>

              <hr />
            </div>
          ))
        )}
      </div>
    </>
  )
}
