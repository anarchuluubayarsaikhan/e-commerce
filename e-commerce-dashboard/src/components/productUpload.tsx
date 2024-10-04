"use client";

import * as yup from "yup";
import { ChangeEvent, useEffect } from "react";
import { Field, Form, Formik, useFormik } from "formik";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const validationSchema = yup.object({
  name: yup.string(),
  information: yup.string(),
});

export function ProductUpload() {
  const initialValues = {
    name: "",
    information: "",
    barCode: "",
    value: "",
    quantity: "",
    category: "",
    subCategory: "",
    addTag: "",
  };

  function postProduct() {
    fetch(`http://localhost:4000/postProducts`, {
      method: "POST",
      body: JSON.stringify({
        name: formik.values.name,
        text: formik.values.information,
        BarCode: formik.values.barCode,
        quantity: formik.values.quantity,
        addTag: formik.values.addTag,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.currentTarget.files;
    console.log(files);
    if (files) uploadFile(files[0]);
  };

  function uploadFile(image: string | File) {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    console.log(image);
    fetch(`http://localhost:4000/uploadfile`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  // function UploadImage(event: ChangeEvent<HTMLInputElement>) {
  //   handleFileChange(event);
  //   // UploadFile();
  // }

  const onSubmit = (values: any, actions: any) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    postProduct();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    console.log(formik.values.category);
  }, [formik.values.category]);

  return (
    <div className="w-full flex flex-col gap-6 bg-primaryGray">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="flex gap-6">
            <div className="max-w-xl flex flex-col gap-6 p-6">
              <div className="bg-white flex flex-col gap-4 p-6 rounded-xl">
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  Бүтээгдэхүүний нэр
                  <Field
                    placeholder="Нэр"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  Нэмэлт мэдээлэл
                  <Field
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="max-w-lg rounded-lg bg-[#D6D8DB] p-2 border-solid border border-black"
                    name="information"
                    component="textarea"
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  Барааны код
                  <Field
                    placeholder="#123456"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="barCode"
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
                        <span className="absolute text-base font-medium">
                          +
                        </span>
                        <Input
                          type="file"
                          className="opacity-0"
                          onChange={handleFileChange}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselContent>
              </Carousel>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl">
                <div className="flex flex-col gap-2 text-base font-semibold">
                  Үндсэн үнэ
                  <Field
                    placeholder="Үндсэн үнэ"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="value"
                  />
                </div>
                <div className="flex flex-col gap-2 text-base font-semibold">
                  Үлдэгдэл тоо ширхэг
                  <Field
                    placeholder="Үлдэгдэл тоо ширхэг"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="quantity"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 pr-6 py-6">
              <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-4">
                <div>
                  <p className="text-base font-semibold">Ерөнхий ангилал</p>
                  <Field
                    name="category"
                    render={({ field }) => (
                      <Select
                        value={field?.value}
                        defaultValue={field.value}
                        onValueChange={(newValue) => field.onChange(newValue)}
                      >
                        <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                          <SelectValue placeholder="Сонгох" className="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Эмэгтэй">Эмэгтэй</SelectItem>
                            <SelectItem value="Эpэгтэй">Эpэгтэй</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <Select name="subCategory">
                  <p className="text-base font-semibold">Дэд ангилал</p>
                  <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="цүнх">цүнх</SelectItem>
                      <SelectItem value="гутал">гутал</SelectItem>
                      <SelectItem value="цамц">цамц</SelectItem>
                      <SelectItem value="цаг">цаг</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-white p-6 flex flex-col gap-6 rounded-lg">
                <p className="text-lg font-semibold">Төрөл</p>
                <div className="flex gap-6 items-center">
                  <p>Өнгө</p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full w-[32px] h-[32px]"
                  >
                    +
                  </Button>
                </div>
                <div className="flex gap-6 items-center">
                  <p>Хэмжээ</p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full w-[32px] h-[32px]"
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outline"
                  type="button"
                  className="rounded-xl max-w-[118px] shadow-lg"
                >
                  <p className="text-sm font-semibold px-4 py-2">Төрөл нэмэх</p>
                </Button>
              </div>
              <div className="bg-white p-6 flex flex-col gap-2 rounded-lg">
                <p className="text-base font-semibold">Таг</p>
                <Field
                  placeholder="Таг нэмэх..."
                  className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                  name="addTag"
                />
                <p className="text-sm font-normal text-[#5E6166] mb-9">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-end px-10 mb-28">
            <Button variant={"outline"} className="p-6 shadow-lg" type="button">
              <p className="text-base font-semibold">Ноорог</p>
            </Button>
            <Button type="submit" className="p-6 shadow-lg">
              <p className="text-base font-semibold">Нийтлэх</p>
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
