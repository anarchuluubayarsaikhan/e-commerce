"use client"

import { Button } from "./ui/button"


export function Usersidebar () {
    const buttonnames = [
        {name: "Хэрэглэгчийн хэсэг"},
        {name: "Захиалгын түүх"},
    ]
    return (
        <div className="flex flex-col gap-1">
            {buttonnames.map ((button)=> 
              <Button variant="ghost" className="text-tersiaryBlack text-sm font-medium w-[244px] self-start pl-4 hover:bg-white rounded-[16px]">{button.name}</Button>
            )}
        </div>
    )
}