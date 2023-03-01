import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import ItemSkelette from '../../../components/skeleton/materiel';
import React from 'react';

export default function Reseau() {

  return (
    <>
      <main className="main">
        <div className="body">

          <Header title="Réseau"  item="" />
          <Navbar />

          <section className="container">
              <ItemSkelette page="réseau"/>
              <Footer />
          </section>
        </div>
      </main>
    </>
  )
}