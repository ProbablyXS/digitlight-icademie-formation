import React from 'react';
import Link from '@mui/material/Link';
import Navbar from '../../components/navbar'
import Footer from '../../components/copyright'
import ItemSkelette from '../../components/skeleton/materiel'
import { useState, useEffect, useRef } from "react";
import LoadingComp from '../../components/loading'

function randomTime(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Accueil() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, randomTime(800, 1000))
  }, [])

  function removeOpacity() {

    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }

    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }

  return (
    <>
      <LoadingComp />
      <main id="main" className="main">
        <div className="body">
          <header className="panelHeader">
            <ul className="breadcrumb">
              <li>
                <Link href="/accueil">
                  Accueil
                </Link>
              </li>
              <li>
                Materiel
              </li>
            </ul>
          </header>
          <Navbar />
          <section className="container">
            <ItemSkelette page="" />
            <Footer />
          </section>
        </div>
      </main>

      {loading ? (<></>) :
        (<>{removeOpacity()}</>)}
    </>
  )
}
