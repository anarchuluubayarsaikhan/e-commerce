"use client"

import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


export function Register() {
  

  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmedPassword, setConfirmedPassword] = useState ("")
  
  const nameIsValid = name.length >1
  const passwordLenghtIsValid = password.length >8
  const validEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
  const containsUppercase = /[A-Z]/.test(password)
  const containsLowercase = /[a-z]/.test(password)
  const containsNumber = /[0-9]/.test(password)
  const containsSpecialchar = /[ !@#$%^&*(),.?":{}|<> ]/.test(password)
  const passwordIsValid = password===confirmedPassword

  const allValid = nameIsValid && passwordLenghtIsValid && validEmail && containsUppercase && containsLowercase && containsNumber && containsSpecialchar && passwordIsValid
  console.log (name, email,password)

  function signup() {
    
    fetch (`http://localhost:4000/signup`, {
      method: "POST",
      body: JSON.stringify (
        { name: name,
          email:email,
          password:password
        }
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  return (
   <div className="flex flex-col gap-4 items-center pt-[100px]">
        <div className="flex flex-col gap-6">
            <p className="text-tersiaryBlack font-semibold text-2xl self-center">Бүртгүүлэх</p>
            <div className="flex flex-col gap-4 w-[334px]"> 
              <Input placeholder="Нэр"  className="rounded-[18px]" value={name} onChange={(e)=> setName (e.target.value)}/>
              <div className="flex flex-col gap-2">
                <Input placeholder="Имэйл хаяг"  className="rounded-[18px]" type="email" value={email} onChange={(e)=> setEmail (e.target.value)}/>
                <div className={`text-xs font-normal text-primaryRed ${validEmail? "hidden":"block"}`}>Зөв имэйл хаяг оруулна уу`</div> 
              </div>         
                <Input placeholder="Нууц үг" type="password" className="rounded-[18px]" value={password} onChange={(e)=> setPassword (e.target.value)}/>      
              <div className="flex flex-col gap-2">
                <Input placeholder="Нууц үг давтах" type="password" className="rounded-[18px]" value={confirmedPassword} onChange={(e)=> setConfirmedPassword (e.target.value)}/>
                <div className={`text-primaryRed text-xs font-normal ${passwordIsValid? "hidden": "block"}`}>Нууц үг ижил биш байна</div>
              </div>
            </div>          
            <ul>
                <li className={`${containsUppercase? "text-primaryGray":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>Том үсэг орсон байх</li>
                <li className={`${containsLowercase? "text-primaryGray":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>Жижиг үсэг орсон байх</li>
                <li className={`${containsNumber? "text-primaryGray":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>Тоо орсон байх</li>
                <li className={`${containsSpecialchar?"text-primaryGray":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>Тэмдэгт орсон байх</li>   
            </ul> 
            </div>
            <div className="flex flex-col gap-12 w-[334px]">
                <Button className="rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700" disabled={!allValid} onClick={()=> signup()}>Үүсгэх</Button>
                <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50">Нэвтрэх</Button>
            </div>
   </div>
    
    
  )
}