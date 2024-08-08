"use client"
import * as React from "react";
import { faker } from '@faker-js/faker';

export default function Home({params: {id}}) {

  const products = {
        id: id,
        image: faker.image.urlPicsumPhotos(),
        name: faker.commerce.productName(),
        subtitle: faker.commerce.productDescription(),
        quantidade:	faker.number.int({ max: 10 }),
        minimo:	faker.number.int({ min: 1,max: 10 }),
        maximo:	faker.number.int({ min: 10,max: 20 }),
        fabricante:	faker.commerce.productDescription(),
        categoria:	faker.commerce.productAdjective()
    }
    
  return (
    <p className="text-2xl">
      Detalhes do produto: <strong>{products.id}</strong>
  </p>
  );

}