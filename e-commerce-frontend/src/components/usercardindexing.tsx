"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function UserCardIndex({ index }: { index: Number }) {
  const [filled, setFilled] = useState(false);

  console.log("filled", filled);

  return (
    <div>
      <Card>
        <CardContent
          className={`relative overflow-hidden rounded-[16px] ${
            index == 6 || index == 7
              ? "max-w-[508px] min-h-[692px] col-span-2 col-start-3 row-span-2"
              : "max-w-[244px] h-[331px]"
          }`}
        >
          <Image
            alt="Image of product"
            width={508}
            height={331}
            src="/blackhoodie.jpeg"
            className={`w-full aspect-video object-cover rounded-[16px] hover:transform hover:scale-125 ${
              index == 6 || index == 7 ? "min-h-[692px]" : "h-full"
            } hover:duration-1000`}
          />
          <button onClick={() => setFilled(!filled)} className="absolute top-4 right-4">
            <Heart
              strokeWidth={1}
              className={` ${
                index == 6 || index == 7 ? "hidden" : "block"
              }`}
              fill={filled === true ? "red" : "none"}
              stroke="black"
            />
          </button>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-1 ">
        <p className="font-normal text-base text-black">The Prompt Magazine</p>
        <div className="text-base text-black font-bold">120’000₮</div>
      </div>
    </div>
  );
}