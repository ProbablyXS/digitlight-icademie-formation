import Link from '@mui/material/Link'
import React from 'react';

export default function Item({ item }) {
  return (<div className="panelItem">
    <div id="entry-pic" className="panelImage">
      <Link href={item.href}>
        <img
          src={item.img}
          alt={item.alt}
          style={{ objectFit: "cover" }}
          width={500}
          height={500}
        />
      </Link>
    </div>
    <div className="itemInfo">
      <div className="itemInfoTitle">
        <span>Nom du produit : </span>
        <span>{item.name}</span>
      </div>
      <div className="itemInfoTitle">
        <Link href={`/materiel/${item.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
          <span>Catégorie : {item.category}</span>
        </Link>
      </div>
      <div className="itemInfoTitle">
        {item.available ?
          <span>Statut : <span style={{ color: "darkgreen" }}>Disponible</span></span>
          :
          <span>Statut : <span style={{ color: "red" }}>Réservé</span></span>
        }
      </div>
    </div>
  </div>)
}