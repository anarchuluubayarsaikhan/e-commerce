"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export function Orderhistory () {
    return (
      <div className="flex flex-col gap-[25px] max-w-[620px]">
        <div className="text-tersiaryBlack text-lg font-bold">Захиалгын түүх</div>
        <hr/>
        <div className="flex flex-col gap-4">
        <div className="py-8 px-6 bg-white flex flex-col gap-4 max-w-[620px] rounded-[16px]">
           <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="text-black text-base font-bold">2024-09-03 15:34</div>
                    <div className="bg-primaryBlue rounded-full py-[2px] px-[10px] font-semibold text-xs text-[#FAFAFA] max-w-[135px]">хүргэлтэнд гарсан</div>
                </div>
                <ChevronUp size={16} />
           </div>
            
            <div className="flex flex-col gap-3 ">
                <div className="flex justify-between items-baseline">
                    <div className=" flex gap-2">
                            <div className="max-w-9 max-h-9 overflow-hidden rounded-[4px]">
                                <Image src="/hoodiee.jpeg" width={36} height={36} className="aspect-square w-full h-full object-cover" alt="Order hostory image"/>
                            </div>       
                            <div className="flex flex-col gap-1">
                                <div className="text-xs font-normal text-black">Chunky Glyph Tee</div>
                                <div className="text-xs font-normal text-black">1 x 120’000₮</div> 
                            </div>
                    
                        </div>
                        <div className="text-xs font-bold text-black">120’000₮</div>
                </div>
            </div>
            <div className="border border-dashed"></div>
            <div className="flex justify-between">
                <div className="font-normal text-base text-black">Үнийн дүн:</div>
                <div className="text-lg font-bold text-black">480’000₮</div>
            </div>

        </div>
       
            <div className="py-8 px-6 bg-white max-w-[620px] flex flex-col gap-4 rounded-[16px]">
                <div className="flex justify-between ">
                        <div className="flex gap-2 ">
                            <div className="text-black text-base font-bold">2024-08-23 15:34</div>
                            <div className="bg-primaryBlue/10 border border-primaryBlue rounded-full py-[2px] px-[10px] font-semibold text-xs text-primaryBlue max-w-[70px]">дууссан</div>
                        </div>
                        <ChevronDown size={16} />
                </div>
                <div className="flex justify-between">
                    <div className="font-normal text-base text-black">Үнийн дүн:</div>
                    <div className="text-lg font-bold text-black">120’000₮</div>
                </div>
                
            </div>
      </div>
      </div>
 
    )
}
