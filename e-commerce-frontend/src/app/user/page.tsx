"use client"
import { ClientHeaders } from "@/components/clientheader";
import { Userpart } from "@/components/userpart";

export default function User () {
    return (
        <div className="flex flex-col gap-4">
            <ClientHeaders/>
            <div className="flex justify-center">
                <Userpart/>
            </div>
            
        </div>
        
    )
    
}