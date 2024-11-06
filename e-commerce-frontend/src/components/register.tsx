"use client";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { postFetch } from "@/utils/fetcher";
import { Formik, FormikErrors, useFormik, } from "formik";
import { object, string, number, date, InferType, ref }from "yup";
import * as yup from "yup";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast"
import { Toast, ToastAction } from "@/components/ui/toast"
import { Toaster } from "./ui/toaster";
import { ToastDescription, ToastProvider } from "@radix-ui/react-toast";



export function Register() {
  const [lenght, setLenght] = useState (false)
  const [password, setPassword] = useState ("")
  const [confirmedPassword, setConfirmedpassword] = useState ("")
  const [alreadysignedup, setAlreadysignedup] = useState(false)
  console.log(confirmedPassword)
  const { toast } = useToast()


  const passwordLenghtIsValid = password.length >8
  const containsUppercase = /[A-Z]/.test(password)
  const containsLowercase = /[a-z]/.test(password)
  const containsNumber = /[0-9]/.test(password)
  const containsSpecialchar = /[ !@#$%^&*(),.?":{}|<> ]/.test(password)
  const validconfirmedPassword = confirmedPassword===password



  function onSubmit() {
    function havesignedup () {
      setAlreadysignedup(true)
    }
    postFetch("signup", {name: formik.values.name, email: formik.values.email, password: password}).then((res)=>{
      if (res.ok) {
        return (window as Window).location = "/login"
      }
      else if (res.status === 406){
        havesignedup()
      }
      else{
         alert("Try again")
      }
    }
  );
    formik.resetForm()
    setPassword("")
  }
  

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmedPassword: ""
  };


  const validationSchema = yup.object({
    name: yup.string().min(2,'Хамгийн багадаа 2 үсэг орсон байх').required("Нэрээ оруулна уу"),
    email: yup.string().email("Зөв имэйл хаяг оруулна уу").required("Имэйл хаягаа оруулна уу"),
  })
  console.log (validationSchema)
  const allValid = validationSchema && containsUppercase && containsLowercase && containsNumber&& containsNumber && containsSpecialchar&&validconfirmedPassword
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema 
  })

  return (
    <div className="flex flex-col gap-12 items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 pt-[100px]"
      >
      <div className="flex flex-col gap-6">
        <p className="text-tersiaryBlack font-semibold text-2xl self-center">
          Бүртгүүлэх
        </p>
        <div className="flex flex-col gap-4 w-[334px]">
          <Input
            id="name"
            placeholder="Нэр"
            className="rounded-[18px]"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          { formik.touched.name? 
            <span className="text-red-500 text-sm text-start">
              {formik.errors.name}
            </span> : null
          }
          <div className="flex flex-col gap-2">
            <Input
              id="email"
              placeholder="Имэйл хаяг"
              className="rounded-[18px]"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            { formik.touched.email? 
              <span className="text-red-500 text-sm text-start">
                {formik.errors.email}
              </span> : null
            }
          </div>
          <Input
            id="password"
            placeholder="Нууц үг"
            type="password"
            className="rounded-[18px]"
            value={password} 
            onChange={(e)=> setPassword (e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <Input
              id="confirmedPassword"
              placeholder="Нууц үг давтах"
              type="password"
              className="rounded-[18px]"
              value={confirmedPassword}
              onChange={(e)=> setConfirmedpassword(e.target.value)}
            />
            { formik.touched.confirmedPassword? 
              <span className="text-red-500 text-sm text-start">
                {formik.errors.confirmedPassword}
              </span> : null
            }
          </div>
        </div>
        <ul>
          <li className={`${passwordLenghtIsValid? "text-green-700":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>
            Хамгийн багадаа 8 үсэг орсон байх   
          </li >
          <li className={`${containsUppercase? "text-green-700":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>
            Том үсэг орсон байх
          </li>
          <li className={`${containsLowercase? "text-green-700":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>
            Жижиг үсэг орсон байх
          </li>
          <li className={`${containsNumber? "text-green-700":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>
            Тоо орсон бай
          </li>
          <li className={`${containsSpecialchar?"text-green-700":"text-primaryRed"} font-normal text-xs list-disc ml-4`}>
            Тэмдэгт орсон бай
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-12 w-[334px]">
      <Button
          className={`rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700 disabled:opacity-30 `}
          type="submit"
          disabled={!allValid}
        >
          Үүсгэх
        </Button>
        
      </div>
     </form>
     <Link href="/login">
        <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50 w-[334px] text-center" type="button">
            Нэвтрэх
        </Button>
     </Link>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Signed up user",
              description: "You have already signed up",
              action: <ToastAction altText="Try again">Log in</ToastAction>,
              hidden: true
            })
          }}
        >
          Show Toast
        </Button>
     </div>
     
     
  );
}