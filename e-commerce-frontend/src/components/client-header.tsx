import { Bell, User } from "lucide-react";
import { Logo } from "./logo";
import { Input } from "@/components/ui/input"

export function ClientHeader() {
    return (
        <div>
            <div className="w-full bg-headerBlack h-[50px] flex justify-between">
                <div className="flex p-3 ml-[15px] gap-2 justify-center text-center items-center">
                    <div><Logo /></div>
                    <div className="text-[#FFFFFF] text-sm">ECOMMERCE</div>
                    <div className="text-[#FFFFFF]">Ангилал</div>
                </div>
                <div><Input type="email" placeholder="Бүтээгдэхүүн хайх" className="bg-[#18181B] w-[300px] h-[40px] rounded-3xl"/></div>
                <div className="flex gap-5 mr-[25px] text-center justify-center items-center">
                    
                </div>
            </div>
        </div>
    )
}