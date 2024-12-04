"use client";
import { ClientHeaders } from "@/components/clientheader";
import { Footerclient } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function BuyStepOne() {
  type Product = {
    _id: string;
    price: number;
    name: string;
    imageurl: string;
    numberofproducts: number;
  };

  function buy() {}
  const [number, setNumber] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const nemeh = () => {
    setNumber((preNumber) => (preNumber < 5 ? number + 1 : preNumber));
  };
  const hasah = () => {
    setNumber((preNumber) => (preNumber > 1 ? number - 1 : preNumber));
  };

  function removefrombasket(_id: any) {
    const existingProduct: Product[] = JSON.parse(
      localStorage.getItem("basketproducts") || "[]"
    );
    const existingProductIndex = existingProduct.findIndex(
      (product) => product._id === _id
    );
    if (existingProductIndex !== -1) {
      existingProduct.splice(existingProductIndex, 1);
      localStorage.setItem("basketproducts", JSON.stringify(existingProduct));
      const newProduct: Product[] = JSON.parse(
        localStorage.getItem("basketproducts") || "[]"
      );
      setProducts(newProduct);
    }
  }
  useEffect(() => {
    const basketproducts: Product[] = JSON.parse(
      localStorage.getItem("basketproducts") || "[]"
    );
    setProducts(basketproducts);
  }, []);

  return (
    <div>
      <ClientHeaders />
      <div className="flex flex-col justify-center gap-6 mt-10">
        <div className="w-[650px] flex flex-col self-center rounded-2xl">
          <div className="w-full p-8 flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <span className="text-xl font-bold">Сагс</span>
              <span className="text-gray-400">({products.length})</span>
            </div>
            {products.map((product) => (
              <div className="flex gap-6 p-4 border rounded-2xl">
                <div className="w-[100px] h-[100px] rounded-xl shadow-2xl overflow-hidden">
                  <Image
                    src={product.imageurl}
                    alt="product"
                    width={100}
                    height={100}
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col gap-2 w-[354px]">
                  <div>
                    <span className="text-sm font-normal">{product.name}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 items-center flex justify-center">
                      {product.numberofproducts} ширхэг
                    </div>
                  </div>
                  <div className="text-base font-bold">
                    {product.price * product.numberofproducts}₮
                  </div>
                </div>
                <button onClick={() => removefrombasket(product._id)}>
                  <Trash2Icon className="size-6" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end p-8">
            <Link href="/buystepone">
              <Button
                onClick={() => buy()}
                variant="secondary"
                className={`bg-primaryBlue hover:bg-blue-900 py-2 px-9 text-sm font-medium rounded-full text-white ${
                  products.length !== 0 ? "block" : "hidden"
                }`}
              >
                Худалдан авах
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
