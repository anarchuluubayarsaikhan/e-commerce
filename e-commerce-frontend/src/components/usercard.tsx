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
  proddet: Productdetail
};

export function UserCard({proddet}: Props) {
  const [savedproducts, setSavedproducts] = useState<Savedproducts[]>([]);

  const [favoriteproducts, setFavoriteproducts] = useState<Object[]>([]);
  const router = useRouter();
  

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
 

 

  console.log(selectedid)
  const [filled, setFilled] = useState(savedproducts.filter((saved) => saved._id===proddet._id).length>0 ? true:false);
  React.useEffect(() => {
    getsavedproducts();
  }, [filled]);
  function routerpush(_id: string) {
    router.push(`/products/${_id}`);
  }

  return (
    <div>
      <div
        className={`relative overflow-hidden rounded-[16px] border border-gray-200 aspect-[3/4] w-full h-full max-h-[331px]`}
      >
        <Image
          alt="Image of product"
          width={508}
          height={331}
          src={proddet.imageurl[0]}
          className={`w-full h-full aspect-[3/4] object-cover rounded-[16px] hover:transform hover:scale-125 hover:duration-1000`}
        />
        <button
          className="absolute top-4 right-4"
          onClick={() =>
            saveproduct(
              proddet._id,
              proddet.imageurl[0],
              proddet.price,
              proddet.information
            )
          }
        >
          <Heart
            strokeWidth={1}
            fill={filled ? "black" : "none"}
            stroke="black"
          />
        </button>
      </div>
      <button
        className="flex flex-col gap-1 "
        onClick={() => routerpush(proddet._id)}
      >
        <p className="font-normal text-base text-black">{proddet.name}</p>
        <div className="text-base text-black font-bold">
          {proddet.price}
        </div>
      </button>
    </div>
  );
}
