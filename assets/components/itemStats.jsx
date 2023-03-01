import { ITEMS } from '../constants/data'
import React from 'react';

const total = function (Category) {
  if (Category == null || Category == '') {
    { return ITEMS.filter(item => item).length }
  }
  else {
    { return ITEMS.filter(item => item.category == Category).length }
  }
}

const available = function (Category) {
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(item => item.available)
        .map((item) =>
          (item)).length
    }
  }
  else {
    {
      return ITEMS.filter(item => item.category == Category)
        .filter(item => item.available).length
    }
  }
}

const unavailable = function (Category) {
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(item => item.unavailable)
        .map((item) =>
          (item)).length
    }
  }
  else {
    {
      return ITEMS.filter(item => item.category == Category)
        .filter(item => item.unavailable).length
    }
  }
}

export default function itemStats({ Category }) {
  return (<div className="statsItems">
    <span>
      Total: {total(Category)}
    </span>
    <span>
      Disponible: {available(Category)}
    </span>
    <span>
      Indisponible: {unavailable(Category)}
    </span>
  </div>)
}