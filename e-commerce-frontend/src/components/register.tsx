"use client";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { postFetch } from "@/utils/fetcher";
import { Formik, FormikErrors, useFormik, } from "formik";
import { object, string, number, date, InferType, ref }from "yup";
import * as yup from "yup";


export function Register() {
  const [containsuppercase, setContainsuppercase] = useState (false)
  const [containslowercase, setContainslowercase] = useState (false)
  const [lenght, setLenght] = useState (false)
  const [containsnumber, setContainsnumber] = useState (false)
  const [containsspecialchar, setSpecialchar] = useState (false)

  console.log (containslowercase)
  



  function onSubmit() {
    postFetch("signup", {name: formik.values.name, email: formik.values.email, password: formik.values.password});
    formik.resetForm()
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
    password: yup.string()
      .min(8, ()=>setLenght(true))
      .required("Нууц үгээ оруулна уу")
      .matches(/^(?=.*[a-z])/, ()=> setContainslowercase(true))
      .matches(/^(?=.*[A-Z])/,()=>  setContainsuppercase(true))
      .matches(/^(?=.*[0-9])/, ()=> setContainsnumber(true))
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        ()=> setSpecialchar(true)
      ),
    confirmedPassword: 
      yup.string()
      .oneOf([ref("password")], "Нууц үг ижил биш байна")
      .required("Нууц үгээ давтан оруулна уу"),
  });



  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema 
  });


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
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {  formik.touched.password? 
            <span className="text-red-500 text-sm text-start">
              {formik.errors.password}
            </span> : null
          }
          <div className="flex flex-col gap-2">
            <Input
              id="confirmedPassword"
              placeholder="Нууц үг давтах"
              type="password"
              className="rounded-[18px]"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
            />
            { formik.touched.confirmedPassword? 
              <span className="text-red-500 text-sm text-start">
                {formik.errors.confirmedPassword}
              </span> : null
            }
          </div>
        </div>
        <ul>
        <li className={`font-normal text-xs list-disc ml-4 `}>
        {formik.touched.password && lenght? <span className="text-red-500">Хамгийн багадаа 8 үсэг орсон байх</span> : <span>Хамгийн багадаа 8 үсэг орсон байх</span>}
            
          </li>
          <li className={`font-normal text-xs list-disc ml-4`}>
          {formik.touched.password && containsuppercase? <span >Том үсэг орсон байх</span> : <span className="text-red-500">Том үсэг орсон байх</span>}
          </li>
          <li className={`font-normal text-xs list-disc ml-4`}>
          {formik.touched.password && containslowercase? <span >Жижиг үсэг орсон байх</span> : <span className="text-red-500">Жижиг үсэг орсон байх</span>}
          </li>
          <li className={`font-normal text-xs list-disc ml-4`}>
          {formik.touched.password && containsnumber? <span >Тоо орсон байх</span> : <span className="text-red-500">Тоо орсон байх</span>}
            
          </li>
          <li className={`font-normal text-xs list-disc ml-4`}>
          {formik.touched.password && containsspecialchar? <span>Тэмдэгт орсон байх</span> : <span className="text-red-500">Тэмдэгт орсон байх</span>}
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-12 w-[334px]">
      <Button
          className={`rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700 disabled:opacity-30 `}
          type="submit"
          disabled={formik.isSubmitting}
        >
          Үүсгэх
        </Button>
        
      </div>
     </form>
      <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50 w-[334px] text-center">
            Нэвтрэх
        </Button>
     </div>
  );
}