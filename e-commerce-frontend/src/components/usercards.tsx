"use client"

import { UserCardIndex } from "./usercardindexing"
const hi = [
    {name: "1"}, 
    {name: "2"}, 
    {name: "3"}, 
    {name: "4"}, 
    {name: "5"}, 
    {name: "6"}, 
    {name: "7"}, 
    {name: "8"}, 
    {name: "9"}, 
    {name: "10"}, 
    {name: "11"}, 
    {name: "12"}, 
    {name: "13"}, 
    {name: "14"}, 
    {name: "15"}, 
    {name: "16"}, 
    {name: "17"}, 
    {name: "18"}
]
export function UserCards () {
    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-12">
            {hi.map ((hey, index) =>
            <div className={`${index==6? "col-start-3 col-span-2 row-span-2":""} ${index==7? "col-start-1 col-span-2 row-span-2":""}`}>
                <UserCardIndex index={index}/>
            </div>
                
            )}
            
        </div>
    )
}