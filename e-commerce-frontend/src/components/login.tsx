"use client";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { postFetch } from "@/utils/fetcher";
import { Formik, FormikErrors, useFormik } from "formik";
import { object, string, number, date, InferType, ref } from "yup";
import * as yup from "yup";
import Link from "next/link";

export function Logincomponent() {
  function onSubmit() {
    postFetch("login", {
      email: formik.values.email,
      password: formik.values.password,
    })
      .then((res) => {
        if (res.ok) {     
          (window as Window).location = "/"
          return (res.json())
        }
        else {
          alert ("You are not authenticated");
        }
      }).then((data) => {
        if (!data) {
          return
        }
        else {
          localStorage.setItem("accessToken", data.token)
        }
        
      });
       
      
      
      
      formik.resetForm();
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Зөв имэйл хаяг оруулна уу")
      .required("Имэйл хаягаа оруулна уу"),
    password: yup
      .string()
      .min(8)
      .required("Нууц үгээ оруулна уу")
      .matches(/^(?=.*[a-z])/)
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#\$%\^&\*])/),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="flex flex-col gap-4 m-auto">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 items-center pt-[100px]"
      >
        <div className="flex flex-col gap-6">
          <p className="text-tersiaryBlack font-semibold text-2xl self-center">
            Нэвтрэх
          </p>
          <div className="flex flex-col gap-4 w-[334px]">
            <div className="flex flex-col gap-2">
              <Input
                id="email"
                placeholder="Имэйл хаяг"
                className="rounded-[18px]"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email ? (
                <span className="text-red-500 text-sm text-start">
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
            <Input
              id="password"
              placeholder="Нууц үг"
              type="password"
              className="rounded-[18px]"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password ? (
              <span className="text-red-500 text-sm text-start">
                {formik.errors.password}
              </span>
            ) : null}
            <div className="flex flex-col gap-2"></div>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-[334px]">
          <Button
            className={`rounded-[18px] bg-primaryBlue text-[#FAFAFA] text-sm font-medium hover:bg-blue-700 disabled:opacity-30`}
            type="submit"
          >
            Нэвтрэх
          </Button>
          <div className="flex flex-col gap-12">
        <Link
          href="/forgetpass"
          className="self-center underline text-#71717A text-sm font-normal"
        >
          Нууц үг мартсан
        </Link>
        <Link href="/signup">
          <Button className="bg-white border-primaryBlue border rounded-[18px] text-primaryBlue text-sm font-medium hover:bg-gray-50 w-[334px] self-center">
            Бүртгүүлэх
          </Button>
        </Link>
       
      </div>
        </div>
      </form>
      
    </div>
  );
}