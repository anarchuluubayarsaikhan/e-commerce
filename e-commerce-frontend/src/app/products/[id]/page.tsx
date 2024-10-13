"use client"
import { ProductDetail } from "@/components/clientProductDetail"
import { useSearchParams } from 'next/navigation'
import { string } from "zod"

export default async function Productdetail({params}:{params:{id:string}}){
    const id = params.id
    console.log(id)
    return (
       <ProductDetail id={id}/>
    )
}