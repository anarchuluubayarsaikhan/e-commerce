import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { SearchButton } from "./search"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"


export function Successfullysaved () {
   return (
    <Dialog >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="bg-white rounded-xl max-w-[551px] p-6 ">
            <DialogHeader>
            <DialogTitle className="pb-8 text-iconPrimary font-bold text-xl"> 
            </DialogTitle>
            
            <DialogDescription className="flex flex-col gap-[121px]">
                <p className="text-iconPrimary font-semibold text-lg">Борлуулалтын төрөл амжиллтай хадгалагдлаа</p>
            
                    <Button className="bg-iconPrimary rounded-xl text-white hover:bg-gray-800 text-sm font-semibold flex gap-1 ">
                        <p className="text-sm font-semibold">Тохиргоог үргэлжлүүлэх</p>
                        <ArrowRight size={20} className="text-white"/>
                    </Button>
         
            </DialogDescription>
            </DialogHeader>
        </DialogContent>    
    </Dialog>
   )
}