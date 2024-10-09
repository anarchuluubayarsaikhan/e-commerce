"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";

export type Productdetail = {
    _id: string,
    name: string,
    information: string,
    barCode: string,
    imageurl:string[],
    price: number,
    leftquantity: number,
    category:string,
    subcategory:string,
    addTag: string,
    color: string[],
    size:string[]
}

type Props = {
  index: number,
  productdetail: Productdetail
}



export function UserCardIndex({ index, productdetail}: Props) {
  const [filled, setFilled] = useState(false);
  const [favoriteproducts, setFavoriteproducts] = useState<Object[]>([])
  console.log(productdetail)
  
  function saveproduct(_id:string,imageurl:string, price:number,information:string ) {
    setFilled(!filled)
    
    if (!filled) {
      setFavoriteproducts((fav)=> [...fav, {
        _id: _id,
        imageurl: imageurl,
        information: information,
        price: price,}])
        localStorage.setItem("favoriteproducts", JSON.stringify(favoriteproducts))
      }
    else { 
         const removefromlocalstorage= favoriteproducts.filter((fav)=>fav._id !== _id)
         setFavoriteproducts(removefromlocalstorage)
         localStorage.setItem("favoriteproducts", JSON.stringify(favoriteproducts))
  }
}
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
                src={productdetail.imageurl[0]}
                className={`w-full aspect-video object-cover rounded-[16px] hover:transform hover:scale-125 ${
                  index == 6 || index == 7 ? "min-h-[692px]" : "h-full"
                } hover:duration-1000`}
              />
              <button className="absolute top-4 right-4"  onClick={()=> saveproduct(productdetail._id, productdetail.imageurl[0], productdetail.price, productdetail.information)}>
                <Heart
                  strokeWidth={1}
                  className={` ${
                    index == 6 || index == 7 ? "hidden" : "block"
                  }`}
                  fill={filled === true ? "black" : "none"}
                  stroke="black"
                />
              </button>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-1 ">
            <p className="font-normal text-base text-black">{productdetail.information}</p>
            <div className="text-base text-black font-bold">{productdetail.price}</div>
          </div>
      </div> 
  );
}