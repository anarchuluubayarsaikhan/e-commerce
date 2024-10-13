import { fetcherwithtoken } from "@/utils/fetcherget";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export type Savedproducts ={
    _id: string,
    imageurl:string,
    information:string,
    price: number
}

export function Savedcomponent () {
    const [savedproducts, setSavedproducts] = useState<Savedproducts[]>([])
    console.log(savedproducts)
    function getsavedproducts () {
        fetcherwithtoken("savedproducts").then((res)=> res.json()).then((data)=> setSavedproducts(data))
    }
    useEffect(()=> {getsavedproducts()},[])
    return (
       
            <div className="flex flex-col gap-4 m-auto min-w-[640px]">
            <div className="flex gap-1">
                <div className="font-bold text-xl text-[#121316]">Хадгалсан бараа</div>
                <div className="text-[#5E6166] text-xl font-medium">({savedproducts.length})</div>
            </div>
            {savedproducts.map ((save)=> (
                <div className="p-4 rounded-[16px] border border-[#ECEDF0] max-w-[622px] flex justify-between items-start">
                <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                    <Image src={save.imageurl} alt="Image" width={100} height={100} className="w-full h-full aspect-square object-cover"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-normal text-base text-black">{save.information}</div>
                    <div className="text-sm font-bold text-[black]">{save.price}</div>
                    <Button className="px-3 py-2 text-white font-medium text-sm bg-[#2563EB] rounded-full hover:bg-blue-950 min-w-[166px]">Сагслах</Button>         
                </div>
                <button>
                    <Heart />
                </button>
            </div>
            ))}
            
            </div>
    
        
      
    )
}