"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

  } from "@/components/ui/carousel"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"
import { EmblaPluginType } from 'embla-carousel'
type PropType = {
    plugins?: EmblaPluginType[]
  }
  import { type CarouselApi } from "@/components/ui/carousel"
import { Productdetail } from "./usercardindexing"

export function ImageSlider ({productdetails}:{productdetails:Productdetail[]}) {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])
     
    return (
        <Carousel  className="pt-[56px]"  setApi={setApi}
        plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true
            }),
          ]}>
            
            <CarouselContent>
            {productdetails.map ((productdetail)=> 
                <CarouselItem>
                  <div className="relative w-full h-full overflow-hidden">
                    <Image src={productdetail.imageurl[0]} alt="TestImage" width={1040} height={446} className="w-full rounded-[16px] h-full aspect-video object-cover"/> 
                      <div className="absolute left-8 bottom-8 ">
                        <div className="font-normal text-lg text-black">{productdetail.name}</div>
                        <div className="font-bold text-4xl text-black">{productdetail.price}</div>
                      </div>
                  </div>
                    
                </CarouselItem>
             )}
            </CarouselContent>
             
        </Carousel>
    )
}