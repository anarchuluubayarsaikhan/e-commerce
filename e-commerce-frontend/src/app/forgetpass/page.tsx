"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postFetch } from "@/utils/fetcher";
import { METHODS } from "http";
import { ChangeEvent, useState } from "react";

export  default function ForgetPassword() {
    const [recoveryemail, setRecoveryemail] = useState ("")
    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        setRecoveryemail(event.target.value)
    }

    function submit() {
        fetch ("http://localhost:4000/forgetpass",{
            method: "POST",
            body: JSON.stringify({
                email:recoveryemail
            }
            ),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        }
        ).then((res)=> {
            if(res.ok) {
                (window as Window).location = "/confirm"
            }
            else if(res.status === 401) {
                (window as Window).location = "/signup"
            }
            else {
                (window as Window).location = "/forgetpass"
            }
        }
            
        )
    }
  return (
    <div className="max-w-[334px] mx-auto grid gap-5 py-20">
      <h1 className="text-center text-[#09090B] text-xl font-semibold">
        Нууц үг сэргээх
      </h1>
      <Input
        type="email"
        placeholder="Имэйл хаяг оруулах"
        className="w-full rounded-full"
        onChange={handleChange}
      />
      <Button className="w-full bg-[#2563EB] rounded-full" onClick={()=> submit()}>
        Илгээх
      </Button>
    </div>
  );
}
