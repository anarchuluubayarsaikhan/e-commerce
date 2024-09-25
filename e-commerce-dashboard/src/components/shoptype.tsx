"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { SearchButton } from "./search"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Successfullysaved } from "./successfullysaved"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"


type Props ={
    open:boolean,
    onClose: () => void,
    onComplete:() => void,
    notComplete: () => void,
    onSuccessfulSaved: () => void,
    completed:boolean
}


export function ShopType ({open, onClose, onComplete,notComplete,completed, onSuccessfulSaved}:Props) {
    const [visible, setVisible]= useState(false)

   
    function save () {
        setVisible(true)
        onComplete()
        onClose();
    }

    function successfullysaved () {
        notComplete()
        onSuccessfulSaved()
    }
   
    
   return (
   <div>
        <Dialog open={open}>
            <DialogContent className="bg-white rounded-xl max-w-[551px] p-6 ">
                <DialogHeader>
                <DialogTitle className="pb-8 text-iconPrimary font-bold text-xl">Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?</DialogTitle>
                <DialogDescription className="flex flex-col gap-[121px]">
                <div className="flex flex-col gap-2">
                    <SearchButton/>
                    <div className="font-normal text-[#5E6166] text-sm">Жич: Та үүнийг хүссэн үедээ өөрчилж болно.</div>
                </div>
                    <div className="flex gap-2 self-end">
                        <Button className="border-tagLightGrayBg border bg-white rounded-xl hover:bg-gray-200 text-sm text-iconPrimary font-semibold" onClick={()=> onClose()}>Цуцлах</Button>      
                        <Button className="bg-iconPrimary rounded-xl text-white hover:bg-gray-800 text-sm font-semibold flex gap-1" onClick={()=> save()}>
                            <span className={`loading loading-spinner loading-sm ${visible? "block" :"hidden"}`}></span>
                            <p >Хадгалах</p>
                        </Button>
                    </div>
                </DialogDescription>
                <Successfullysaved />
                </DialogHeader>
            </DialogContent>  
        </Dialog>
        <Dialog open={completed}>
            <DialogContent className="bg-white rounded-xl max-w-[551px] p-6 ">
            <DialogHeader className="flex flex-col gap-4 items-center">
                <DialogTitle className="pb-8 text-iconPrimary font-bold text-xl"> 
                <Image src="/saved.png" width={60} height={60} alt="Successfully saved"/>
            </DialogTitle>
            
            <DialogDescription className="flex flex-col gap-6">
                <p className="text-iconPrimary font-semibold text-lg">Борлуулалтын төрөл амжиллтай хадгалагдлаа</p>
            
                    <Button className="bg-iconPrimary rounded-xl text-white hover:bg-gray-800 text-sm font-semibold flex gap-1" onClick={()=> successfullysaved ()}>
                        <p className="text-sm font-semibold">Тохиргоог үргэлжлүүлэх</p>
                        <ArrowRight size={20} className="text-white"/>
                    </Button>
                   
            </DialogDescription>
            </DialogHeader>
            </DialogContent>    
        </Dialog>
   </div>
   )
}