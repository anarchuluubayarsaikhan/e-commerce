"use client"
import * as React from "react"
import {
  Card,
  CardContent,

} from "@/components/ui/card"

import Image from "next/image"
import { Heart } from "lucide-react"
import { useState } from "react";
import { Button } from "./ui/button"

export function UserCard () {
    const [filled, setFilled] = useState(false);
    return (
        <div>
            <Card>
                <CardContent className="relative overflow-hidden rounded-[16px]  max-w-[244px] h-[331px] " >
                    <Image alt="Image of product" width={245} height={331} src="/testimage.jpg" className="w-full  rounded-[16px] hover:transform hover:scale-125  h-full hover:duration-1000 aspect-video"/>
                    <Button onClick={() => setFilled(!filled)}>
                        <Heart strokeWidth={1} className="absolute top-4 right-4" fill={filled === true ? "red" : "none"} stroke="black"/>
                    </Button>
                    
                </CardContent>
            </Card>
       <div className="flex flex-col gap-1">
            <p className="font-normal text-base text-black">The Prompt Magazine</p>
            <div className="text-base text-black font-bold">120’000₮</div>
       </div>
        </div>
    )
}