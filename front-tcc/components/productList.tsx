"use client"
import * as React from "react";
import { products } from "./mock/products";
import CardProduct from "./ui/cardProduct";

export default function ProductsList() {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-y-6 rounded-lg p-3">
      {products.map((i)=>{
        return(
            <CardProduct key={i.name} product={i}></CardProduct>
        )
        })
      }
    </div>

  );
}
