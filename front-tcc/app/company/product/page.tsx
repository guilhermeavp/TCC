"use client"
import { useState, useEffect } from "react";
import { API } from "@/app/api/api";


export default function Home() {
  const [data, setData]= useState();
  const [loading, setLoading]= useState(true);
  async function getData() {
    const teste = await API('/','GET');
    console.log(teste)
    setData(teste)
    setLoading(false);
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
    {data && data.map(i =>{ 
      return(
      <p key= {i.id} className="text-2xl">
        Id:{i._id}
        Nome:{i.name}
        Quantidade:{i.quantity}
        minimo carrinho:{i.minCart}
        maximo carrinho:{i.maxCart}
        </p>)}
      )}
    </div>
  );

}
