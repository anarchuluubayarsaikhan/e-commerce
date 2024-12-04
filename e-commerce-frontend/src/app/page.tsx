"use client";
import { ImageSlider } from "@/components/carousel";
import { ClientHeaders } from "@/components/clientheader";
import { Footerclient } from "@/components/footer";
import { Productdetail } from "@/components/usercardindexing";
import { UserCards } from "@/components/usercards";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { useEffect, useState } from "react";



export default function Home() {
  const [productdetails, setProductdetails] = useState<Productdetail[]>([]);
  const [loading, setLoading]=useState(true)
  console.log(productdetails);
  function getproductdetails() {
    fetcherwithtoken("getproductdetails")
      .then((res) => res.json())
      .then((data) => {setProductdetails(data)
    setLoading(false)});
  }
  useEffect(() => {
    getproductdetails();
  }, []);

  return (
    <>
     {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-8 border-t-transparent border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
     <div className="flex flex-col gap-6 ">
      <div className="mx-auto flex flex-col gap-6">
        <ClientHeaders/>
        <UserCards productdetails={productdetails} getproductdetails={getproductdetails}/>
        <Footerclient/>
      </div>
    </div>)}
    </>
  
  );
}
