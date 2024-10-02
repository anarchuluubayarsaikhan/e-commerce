"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { Formik, FormikErrors, useFormik } from "formik";
import * as yup from "yup";

export function ProductUpload() {

  const initialValues = {
    name: "",
    information: "",
    barCode: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string(),
    information: yup
      .string()
  });

  function onSubmit() {
    return;

  }
  type handleChangetype = {
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function postProduct() {
    fetch(`http://localhost:4000/postProducts`,
      {
        method: "POST",
        body: JSON.stringify({
          name: formik.values.name,
          text: formik.values.information,
          BarCode: formik.values.barCode,
        }
        ),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      }
    )
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.currentTarget.files;
    console.log(files)
    if (files) uploadFile(files[0])
  }

  function uploadFile(image: string | File) {
    if (!image) return
    const formData = new FormData()
    formData.append("image", image)
    console.log(image)
    fetch(`http://localhost:4000/uploadfile`,
      {
        method: "POST",
        body: formData
      }
    ).then((res) => res.json())
      .then((data) => console.log(data))
  }

  // function UploadImage(event: ChangeEvent<HTMLInputElement>) {
  //   handleFileChange(event);
  //   // UploadFile();
  // }




  return (
    <div className="w-full flex flex-col gap-6 bg-primaryGray">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-6">
          <div className="max-w-xl flex flex-col gap-6 p-6">
            <div className="bg-white flex flex-col gap-4 p-6 rounded-xl">
              <div className="flex flex-col gap-2 text-sm font-semibold">
                Бүтээгдэхүүний нэр
                <Input placeholder="Нэр" className="bg-[#D6D8DB] p-2 border-solid border border-black" value={formik.values.name} onChange={formik.handleChange} />
              </div>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                Нэмэлт мэдээлэл
                <Textarea
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  className="max-w-lg bg-[#D6D8DB] p-2 border-solid border border-black" value={formik.values.information} onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                Барааны код
                <Input
                  type="number"
                  placeholder="#123456"
                  className="bg-[#D6D8DB] p-2 border-solid border border-black" value={formik.values.barCode} onChange={formik.handleChange}
                />
              </div>
            </div>
            <Carousel className="w-full max-w-xl box-border rounded-xl p-6 flex flex-col gap-4 bg-white">
              <p className="text-lg font-semibold">Бүтээгдэхүүний зураг</p>
              <CarouselContent className="flex gap-2">
                <Card className="w-[125px] h-[125px] rounded-xl border-dashed border-2 ">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold"></span>
                  </CardContent>
                </Card>
                <Card className="w-[125px] h-[125px] rounded-xl border-dashed border-2">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold"></span>
                  </CardContent>
                </Card>
                <Card className="w-[125px] h-[125px] rounded-xl border-dashed border-2">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold"></span>
                  </CardContent>
                </Card>
                <Card className="w-[125px] h-[125px] rounded-xl bg-white flex items-center justify-center">
                  <CardContent className="w-full flex items-center justify-center p-6">
                    <div className="rounded-full w-[32px] h-[32px] relative">
                      <span className="absolute text-base font-medium" >+</span>
                      <Input type="file" className="opacity-0" onChange={handleFileChange} />
                    </div>
                  </CardContent>
                </Card>
              </CarouselContent>
            </Carousel>
            <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl">
              <div className="flex flex-col gap-2 text-base font-semibold">
                Үндсэн үнэ
                <Input placeholder="Үндсэн үнэ" className="bg-[#D6D8DB] p-2 border-solid border border-black" />
              </div>
              <div className="flex flex-col gap-2 text-base font-semibold">
                Үлдэгдэл тоо ширхэг
                <Input
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="bg-[#D6D8DB] p-2 border-solid border border-black"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 pr-6 py-6">
            <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-4">
              <Select>
                <p className="text-base font-semibold">Ерөнхий ангилал</p>
                <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                  <SelectValue placeholder="Сонгох" className="" />

                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <p className="text-base font-semibold">Дэд ангилал</p>
                <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                  <SelectValue placeholder="Сонгох" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-white p-6 flex flex-col gap-6 rounded-lg">
              <p className="text-lg font-semibold">Төрөл</p>
              <div className="flex gap-6 items-center">
                <p>Өнгө</p>
                <Button variant="secondary" className="rounded-full w-[32px] h-[32px]">
                  +
                </Button>
              </div>
              <div className="flex gap-6 items-center">
                <p>Хэмжээ</p>
                <Button variant="secondary" className="rounded-full w-[32px] h-[32px]">
                  +
                </Button>
              </div>
              <Button variant="outline" className="rounded-xl max-w-[118px] shadow-lg">
                <p className="text-sm font-semibold px-4 py-2">Төрөл нэмэх</p>
              </Button>
            </div>
            <div className="bg-white p-6 flex flex-col gap-2 rounded-lg">
              <p className="text-base font-semibold">Таг</p>
              <Input placeholder="Таг нэмэх..." className="bg-[#D6D8DB] p-2 border-solid border border-black" />
              <p className="text-sm font-normal text-[#5E6166] mb-9">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-end px-10 mb-28">
          <Button variant={"outline"} className="p-6 shadow-lg"><p className="text-base font-semibold">Ноорог</p></Button>
          <Button className="p-6 shadow-lg"><p className="text-base font-semibold">Нийтлэх</p></Button>
        </div>
      </form>
    </div>
  );
}
