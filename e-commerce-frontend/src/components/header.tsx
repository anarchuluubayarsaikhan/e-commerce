import { Bell, User } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
    return (
        <div>
            <div className="w-full bg-headerBlack h-[50px] flex justify-between">
                <div className="grid p-3 ml-[15px]"><Logo /></div>
                <div className="flex gap-5 mr-[25px] text-center justify-center items-center">
                    <div className="text-white"><Bell size={20} strokeWidth={2.25} /></div>
                    <div className="text-white flex gap-2 items-center"><User size={20} strokeWidth={2.25} /> 
                        <div className="text-white">Username</div>
                    </div>
                </div>
            </div>
        </div>
    )
}