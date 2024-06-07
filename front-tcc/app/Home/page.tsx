"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import CarouselAutoPlay from "@/components/carouselAutoPlay";


export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
     <CarouselAutoPlay name={'Best sellers'}></CarouselAutoPlay>
     <CarouselAutoPlay name={'Offers'}></CarouselAutoPlay>
    </>
  );
}
