import * as React from "react"
import { UserCard } from "./usercard"

export function UserCards () {
    return (
       <div className="grid grid-cols-4 gap-5">
         <UserCard/>
       </div>
    )
}