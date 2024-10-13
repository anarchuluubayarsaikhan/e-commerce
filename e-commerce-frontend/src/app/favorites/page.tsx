"use client"

import { ClientHeaders } from "@/components/clientheader"
import { Savedcomponent } from "@/components/saved"

export default function Saved () {
    return (
        <div className="flex flex-col gap-8">
            <ClientHeaders/>
            <div className="flex self-center">
                <Savedcomponent/>
            </div>
            
        </div>
   
        
        
    )
    
}