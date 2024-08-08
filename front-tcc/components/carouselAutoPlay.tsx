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

interface ICarrousel {
    name: string
}
export default function CarouselAutoPlay({name}:ICarrousel) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
      <div className="flex justify-center	bg-gray-200 flex-col shadow-lg rounded-lg p-3">
      <h2 className="text-3xl font-bold p-2">{name}</h2>
      <div className="flex justify-center mx-3.5">
      <Carousel 
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full  max-w-screen-lg">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 100 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      </div>
    </>
  );
}
