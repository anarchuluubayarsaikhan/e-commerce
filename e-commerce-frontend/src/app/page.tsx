"use client";
import { ImageSlider } from "@/components/carousel";
import { ClientHeaders } from "@/components/clientheader";
import { Filterbycategory } from "@/components/filterbycategory";
import { Footerclient } from "@/components/footer";
import { Productdetail } from "@/components/usercardindexing";
import { UserCards } from "@/components/usercards";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { useEffect, useState } from "react";


export default function Home() {
  const [productdetails, setProductdetails] = useState<Productdetail[]>([]);
  console.log(productdetails);
  function getproductdetails() {
    fetcherwithtoken("getproductdetails")
      .then((res) => res.json())
      .then((data) => setProductdetails(data));
  }
  useEffect(() => {
    getproductdetails();
  }, []);

  

  return (
   <div className="flex flex-col gap-6">
      <ClientHeaders/>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        <ImageSlider productdetails={productdetails} />
        <UserCards productdetails={productdetails} />
      </div>
      <Footerclient/>
    </div>

  );
}
