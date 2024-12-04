"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { fetcherwithtoken } from "@/utils/fetcherget";


import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination,RefinementList } from 'react-instantsearch';

const searchClient = algoliasearch('MLKXEEH303', 'dc3895feeae585b208d713220c7e40d8')

function Hit({ hit }:{hit:any}) {
    return (
      <article>
        <img src={hit.image} alt={hit.name} />
        <p>{hit.information}</p>
        <h1>{hit.addTag}</h1>
      </article>
    );
  }

export function ClientHeaders() {
    const [searchvalue, setSearchvalue] =useState("")
    const [searcheddata, setSearcheddata] =useState("")

    function handlechange (event: ChangeEvent<HTMLInputElement>) {
        setSearchvalue(event.target.value)
    }

    function searchfunction() {
        fetcherwithtoken(`search?searchvalue=${searchvalue ?? ""}`).then((res)=> res.json()).then((data)=> setSearcheddata(data))
        console.log (searcheddata)
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
                <div className="flex gap-5 mr-[25px] text-center justify-center items-center">
                    <Link href="/favorites" className="text-[#FFFFFF]">
                        <Heart strokeWidth={1.25} />
                    </Link>
                    <Link className="text-[#FFFFFF]" href="/basket"><ShoppingCart strokeWidth={1.25} /></Link>
                </div>
            </div>
        </div>
    )
}