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


export function ShopType () {
   return (
    <Dialog >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="bg-white rounded-xl max-w-[551px] p-6 ">
            <DialogHeader>
            <DialogTitle className="pb-8 text-iconPrimary font-bold text-xl">Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?</DialogTitle>
            <DialogDescription className="flex flex-col gap-[121px]">
               <div className="flex flex-col gap-2">
                <SearchButton/>
                <div className="font-normal text-[#5E6166] text-sm">Жич: Та үүнийг хүссэн үедээ өөрчилж болно.</div>
               </div>
                <div className="flex gap-2 self-end">
                    <Button className="border-tagLightGrayBg border bg-white rounded-xl hover:bg-gray-200 text-sm text-iconPrimary font-semibold">Цуцлах</Button>      
                    <Button className="bg-iconPrimary rounded-xl text-white hover:bg-gray-800 text-sm font-semibold flex gap-1">
                    <span className="loading loading-spinner loading-sm"></span>
                    <p>Хадгалах</p></Button>
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>    
    </Dialog>
   )
}