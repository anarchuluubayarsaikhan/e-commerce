"use client"
import { ImageSlider } from "@/components/carousel";
import { Filterbycategory } from "@/components/filterbycategory";
import { Productdetail } from "@/components/usercardindexing";
import { UserCards } from "@/components/usercards";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { useEffect, useState } from "react";

export default function Home() {
  const [productdetails, setProductdetails] = useState<Productdetail[]>([])
  console.log (productdetails)
  function getproductdetails () {
      fetcherwithtoken ("getproductdetails").then((res)=>  {
        if (res.ok) {
          return res.json()
        }
        else if(res.status === 403) {
          return alert ("Please login")
        }
        else {
          alert("Not found")
        }
      }
    ).then((data)=> setProductdetails(data))
  }
  useEffect (() => {
      getproductdetails ()
  }, [])
  return (
    <div className="max-w-[1440px] mx-auto">
      <ImageSlider productdetails={productdetails}/>
      <UserCards productdetails={productdetails}/>
    </div>
  );
}
