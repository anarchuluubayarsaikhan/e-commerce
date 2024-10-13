"use client";
import * as React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { Savedproducts } from "./saved";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postfetcherwithtoken } from "@/utils/fetcherpost";
import { deleteFetch } from "@/utils/deletefetcher";
import { boolean } from "zod";
import Saved from "@/app/favorites/page";

export type Productdetail = {
  _id: string;
  name: string;
  information: string;
  barCode: string;
  imageurl: string[];
  price: number;
  leftquantity: number;
  category: string;
  subcategory: string;
  addTag: string;
  color: string[];
  size: string[];
};

type Props = {
  index: number;
  productdetail: Productdetail
};

export function UserCardIndex({ index, productdetail}: Props) {
  const [savedproducts, setSavedproducts] = useState<Savedproducts[]>([]);

  const [favoriteproducts, setFavoriteproducts] = useState<Object[]>([]);
  const router = useRouter();
  
  console.log(productdetail._id)
  const [selectedid, setSelectedid] = useState("")

  function saveproduct(
    _id: string,
    imageurl: string,
    price: number,
    information: string
  ) {
    setSelectedid(_id)

    if (!filled) {
      postfetcherwithtoken("saveproduct", {
        _id: _id,
        imageurl: imageurl,
        information: information,
        price: price,
      });
      setFilled(!filled);
    } else {
      deleteFetch(`saveproduct${_id}`);
      setFilled(!filled);
    }
  }
  
  function getsavedproducts() {
    fetcherwithtoken("savedproducts")
      .then((res) => res.json())
      .then((data) => setSavedproducts(data));
  }
 

  console.log(productdetail);

  console.log(productdetail);

 

  console.log(selectedid)
  const [filled, setFilled] = useState(savedproducts.filter((saved) => saved._id===productdetail._id).length>0 ? true:false);
  React.useEffect(() => {
    getsavedproducts();
  }, [filled]);
  function routerpush(_id: string) {
    router.push(`/products/${_id}`);
  }

  return (
    <div>
      <div
        className={`relative overflow-hidden rounded-[16px] border border-gray-200 aspect-[3/4] ${
          index == 6 || index == 7
            ? "w-full h-full col-span-2 col-start-3 row-span-2"
            : "w-full h-full"
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
        <button
          className="absolute top-4 right-4"
          onClick={() =>
            saveproduct(
              productdetail._id,
              productdetail.imageurl[0],
              productdetail.price,
              productdetail.information
            )
          }
        >
          <Heart
            strokeWidth={1}
            className={` ${index == 6 || index == 7 ? "hidden" : "block"}`}
            fill={filled ? "black" : "none"}
            stroke="black"
          />
        </button>
      </div>
      <button
        className="flex flex-col gap-1 "
        onClick={() => routerpush(productdetail._id)}
      >
        <p className="font-normal text-base text-black">{productdetail.name}</p>
        <div className="text-base text-black font-bold">
          {productdetail.price}
        </div>
      </button>
    </div>
  );
}
