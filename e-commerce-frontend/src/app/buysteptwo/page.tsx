
import { ClientHeaders } from "@/components/clientheader";
import { Footerclient } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";




export default function BuyStepThree() {
    return (
        <>
        <ClientHeaders/>
        <div className=" flex items-center justify-center h-screen">
            <p className="text-4xl text-green-800 font-bold">Таны захиалга амжилттай баталгаажлаа!</p>
        </div>
        <Footerclient/>
        </>
        
    )
}