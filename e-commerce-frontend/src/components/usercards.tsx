"use client"

import { useEffect, useState } from "react"
import { Productdetail, UserCardIndex } from "./usercardindexing"
import { fetcherwithtoken } from "@/utils/fetcherget"

type Props = {
    productdetails:Productdetail[]
}
  


export function UserCards ({productdetails}:Props) {
    
    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
            {productdetails.map ((productdetail, index) =>
            <div className={`${index==6? "col-start-3 col-span-2 row-span-2":""} ${index==7? "col-start-1 col-span-2 row-span-2":""}`}>
                <UserCardIndex index={index} productdetail={productdetail} setProductdetails= {setProductdetails}/>
            </div>
                
            )}
            
        </div>
    )
}