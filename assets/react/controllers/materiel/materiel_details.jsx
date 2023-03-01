import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/copyright';
import ItemSkelette from '../../../components/skeleton/materiel_details';
import React from 'react';

export default function Item(props) {

  return (
    <>
      <main className="main">
        <div className="body">

          <Header title={props.cat} item={props.item} />
          <Navbar />

          <section className="InfoItem">
              <ItemSkelette itemName={props.item}/>
              <Footer />
          </section>
        </div>
      </main>
    </>
  )
}