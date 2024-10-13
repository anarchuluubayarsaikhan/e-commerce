"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { fetcherwithtoken } from "@/utils/fetcherget";


export function ClientHeaders() {
    const [searchvalue, setSearchvalue] =useState("")
    const [searcheddata, setSearcheddata] =useState("")

    function handlechange (event: ChangeEvent<HTMLInputElement>) {
        setSearchvalue(event.target.value)
    }

    function searchfunction() {
        // fetcherwithtoken(`search?searchvalue=${searchvalue ?? ""}`).then((res)=> res.json()).then((data)=> setSearcheddata(data))
        console.log ("hi")
    }
   
    return (
        <div>
            <div className="w-full bg-headerBlack h-[50px] flex justify-between">
                <div className="flex p-3 ml-[15px] gap-2 justify-center text-center items-center">
                    <Link href="/" className="flex gap-[6px]">
                        <Logo />
                         <button className="text-[#FFFFFF] text-sm ">ECOMMERCE</button>
                    </Link>
                    <Link href="./category" className="text-slate-400 text-sm font-normal ml-[20px]">Ангилал</Link>
                </div>
                <label className="input input-bordered flex items-center gap-2 h-[40px] w-[300px] bg-[#18181B] text-center rounded-full my-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5 opacity-70 text-[#FAFAFA]">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                    <input type="text" className="grow text-white" placeholder="Бүтээгдэхүүн хайх" value={searchvalue}  onChange={handlechange} onKeyDown={(e)=> e.key==="Enter" && searchvalue.length>0? searchfunction() : ""}/>
                </label>
                <div className="flex gap-5 mr-[25px] text-center justify-center items-center">
                    <Link href="/favorites" className="text-[#FFFFFF]">
                        <Heart strokeWidth={1.25} />
                    </Link>
                    <Link className="text-[#FFFFFF]" href="/basket"><ShoppingCart strokeWidth={1.25} /></Link>
                    <Link className="text-[#FFFFFF]" href="/user"><User strokeWidth={1.25} /></Link>
                </div>
            </div>
        </div>
    )
}