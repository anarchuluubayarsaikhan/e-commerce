"use client"

import { useEffect, useState } from "react"
import { Productdetail, UserCardIndex } from "./usercardindexing"

export function UserCards () {
    const [productdetails, setProductdetails] = useState<Productdetail[]>([])
    console.log (productdetails)
    function getproductdetails () {
        fetch ("http://localhost:4000/getproductdetails").then((res)=> res.json()).then((data)=> setProductdetails(data))
    }
    useEffect (() => {
        getproductdetails ()
    }, [])
    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
            {productdetails.map ((productdetail, index) =>
            <div className={`${index==6? "col-start-3 col-span-2 row-span-2":""} ${index==7? "col-start-1 col-span-2 row-span-2":""}`}>
                <UserCardIndex index={index} productdetail={productdetail}/>
            </div>
                
            )}
            
        </div>
    )
}