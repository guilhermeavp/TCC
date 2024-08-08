"use client"
import Link from "next/link";
import * as React from "react";

interface ICard {
  name: string
}

export default function CardProduct({product}:any) {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl flex flex-col m-1">
    <Link href={`/Product/${product.id}`} >
      <figure><img src={product.image} alt={product.name} /></figure>
    </Link>
      <div className="card-body">
      <h2 className="card-title">{product.name}</h2>
      <p>{product.subtitle}</p>
      <div className="card-actions justify-between">
        <button onClick={()=> console.log('teste')} className="btn btn-secondary">Add cart</button>
        <button className="btn">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Favorite
      </button>
      </div>
      </div>
    </div>
  );
}
