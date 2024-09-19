import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"

export function ImageSlider () {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <Image src="/testimage.jpg" alt="TestImage" width={1040} height={446} className="w-full rounded-[16px] h-[446px] aspect-video"/> 
                </CarouselItem>
                <CarouselItem className="rounded-xl">
                    <Image src="/testimage2.jpeg" alt="TestImage" width={1040} height={446} className="w-full h-[446px] rounded-[16px] aspect-video"/> 
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}