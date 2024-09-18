import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card"

import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

export function UserCard () {
    return (
        <Card className="max-w-[244px] ">
            <CardContent className="relative overflow-hidden rounded-[16px]" >
                <Image alt="Image of product" width={245} height={331} src="/testimage.jpg" className="w-full h-full rounded-[16px] hover:transform hover:scale-125 "/>
                <Heart strokeWidth={1} className="absolute top-4 right-4"/>
            </CardContent>
            <CardFooter className="flex flex-col gap-1">
                <p className="font-normal text-base text-black">The Prompt Magazine</p>
                <div className="text-base text-black font-bold">120’000₮</div>
            </CardFooter>
            <Button>hi</Button>
        </Card>
    )
}