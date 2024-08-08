"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import CarouselAutoPlay from "@/components/carouselAutoPlay";
import ProductsList from "@/components/productList";


export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
     <CarouselAutoPlay name={'Best sellers'}></CarouselAutoPlay>
     <CarouselAutoPlay name={'Offers'}></CarouselAutoPlay>
     <ProductsList></ProductsList>
    </>
  );

}
