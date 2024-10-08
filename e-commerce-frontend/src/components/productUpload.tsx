"use client"

import * as yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { Field, Form, Formik, useFormik } from "formik";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";

const validationSchema = yup.object({
  name: yup.string(),
  information: yup.string(),
});

export function ProductUpload() {

  const [category, setCategory] =useState ("")
  const [subcategory, setSubcategory] =useState ("")
  const [image, setImage] = useState<FileList | null>(null)
  const [addtypes, setAddtypes] = useState(false)
  const [alltypes, setAlltypes] = useState<string[]>(["Өнгө","Размер"])
  const [subtypes, setSubtypes] = useState(false)
  const [imageurl, setImageurl] = useState([])
  const [color, setColor] = useState<String[]>([])
  const [size, setSize] = useState<String[]>([])
  console.log (color, size)

  const initialValues = {
    name: "",
    information: "",
    barCode: yup.number,
    imageurl:imageurl,
    price: yup.number,
    leftquantity: yup.number,
    Өнгө:"",
    Размер:"",
    type:"",
    addTag: "",
  };

  const categories = [
    {name: "Эрэгтэй",
     value: "эр"
    },
    {name: "Эмэгтэй",
    value: "эм"
    }
  ]

  const subcategories = [
    {name: "цүнх",
    value: "цүнх"
    },
    {name: "гутал",
    value: "гутал"
    },
    {name: "цамц",
    value: "цамц"
    },
    {name: "цаг",
    value: "цаг"
    },
  ]

  const colors = [
    {colorname: "улаан",
      value: "#FF0000",
      
    },
    {colorname: "улаан",
      value: "#00ff00"
    },
    {colorname: "нил ягаан",
      value: "#A020F0"
    },
    {colorname: "бор",
      value: "#964B00"
    },
    {colorname: "цагаан",
      value: "#FFFFFF"
    },
    {colorname: "улбар шар",
      value: "#FFA500"
    },
    {colorname: "цэнхэр",
      value: "#0000FF"
    },
    {colorname: "ягаан",
      value: "#FFC0CB"
    },
    {colorname: "саарал",
      value: "#808080"
    },
    {colorname: "шар",
      value: "#FFFF00"
    },
    {colorname: "хар",
      value: "#000000"
    },
  ]

  const sizes = [
    {sizename: "XS"},
    {sizename: "S"},
    {sizename: "M"},
    {sizename: "L"},
    {sizename: "XL"},
    {sizename: "2XL"},
    {sizename: "3XL"},
    {sizename: "4XL"},
  ]

  function postProduct() {
    fetch(`http://localhost:4000/postProducts`, {
      method: "POST",
      body: JSON.stringify({
        name: formik.values.name,
        information: formik.values.information,
        barCode: randomnumber,
        price: formik.values.price,
        imageurl:imageurl,
        leftquantity: formik.values.leftquantity,
        category:category,
        subcategory:subcategory,
        color: color,
        size: size, 
        addTag: formik.values.addTag,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }
  

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.currentTarget.files;
    if (files) setImage(files)
  };
  const arrayofimmages = Array.from(image ?? [])
  const setUrl: string[] = []

  arrayofimmages.forEach((img) => {
    const url = URL.createObjectURL(img)
    setUrl.push(url)
  })

  function uploadFile() {
    if (!image) return;
    const formData = new FormData();
    Array.from (image ?? []).forEach((file:File) =>  formData.append("image",file, file.name))
    fetch(`http://localhost:4000/uploadfile`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImageurl(data));
  }

  const onSubmit = (values: any, actions: any) => {
    uploadFile()
    actions.setSubmitting(false);
    postProduct();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function showinput(){
    setAddtypes(true)
  }
  function addtype() {
   setAlltypes(type=> [...type,formik.values.type])
  }

  function addsubtypes () {
    setSubtypes(true)
  }
  console.log (formik.values.addTag)

  const randomnumber = Math.floor(Math.random()*899999)+100000

  function addtoarray() {
    setColor(col=> [...col, formik.values.Өнгө])
    setSize(col=> [...col, formik.values.Размер])
  }
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
                  <Input
                    placeholder="Нэр"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  Нэмэлт мэдээлэл
                  <Textarea
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="max-w-lg rounded-lg bg-[#D6D8DB] p-2 border-solid border border-black"
                    name="information"
                    id="information"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  Барааны код
                  <Input
                    placeholder={String(randomnumber)}
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="barCode"
                    type="number"
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full max-w-xl box-border rounded-xl p-6 flex flex-col gap-4 bg-white">
                <p className="text-lg font-semibold">Бүтээгдэхүүний зураг</p>
                <div className="flex gap-2">
                  {setUrl.map((a) =>
                    <div className="flex w-[125px] h-[125px] rounded-xl border-dashed border-2 overflow-hidden">
                      <img src={a} className="flex aspect-square items-center justify-center w-full h-full object-cover" />
                    </div>
                  )}
                  <Card className="w-[125px] h-[125px] rounded-xl bg-white flex items-center justify-center">
                    <CardContent className="w-full flex items-center justify-center p-6">
                      <div className="rounded-full w-[32px] h-[32px] relative">
                        <span className="absolute text-base font-medium">
                          +
                        </span>
                        <Input
                          multiple
                          type="file"
                          className="opacity-0"
                          id="barcode"
                          onChange={handleFileChange}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl">
                <div className="flex flex-col gap-2 text-base font-semibold">
                  Үндсэн үнэ
                  <Input
                    placeholder="Үндсэн үнэ"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="price"
                    id="price"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2 text-base font-semibold">
                  Үлдэгдэл тоо ширхэг
                  <Input
                    placeholder="Үлдэгдэл тоо ширхэг"
                    className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                    name="leftquantity"
                    id="leftquantity"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 pr-6 py-6">
              <div className="w-full bg-white p-6 rounded-lg flex flex-col gap-4">
                <div>
                  <p className="text-base font-semibold">Ерөнхий ангилал</p>
                      <Select
                        onValueChange={setCategory}
                      >
                        <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                          <SelectValue placeholder="Сонгох" className="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {categories.map ((category) => 
                               <SelectItem value={category.value}>{category.name}</SelectItem>
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    
                </div>
                <Select name="subCategory" onValueChange={setSubcategory}>
                  <p className="text-base font-semibold">Дэд ангилал</p>
                  <SelectTrigger className="w-full bg-[#D6D8DB] border-solid border border-black">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {subcategories.map ((subcategory) =>
                        <SelectItem value={subcategory.value}>{subcategory.name}</SelectItem>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-white p-6 flex flex-col gap-6 rounded-lg">
                <p className="text-lg font-semibold">Төрөл</p>
                {alltypes.map((type)=> 
                 <div className="flex gap-6 items-center">
                 <p>Өнгө</p>
                 <Button
                   type="button"
                   variant="secondary"
                   className="rounded-full w-[32px] h-[32px]"
                   onClick={() => addsubtypes()}
                 >
                   +
                 </Button>
                 <div className="flex gap-2">
                  {colors.map ((color) => 
                  <span className={`rounded-full w-4 h-4`}>{color.colorname}</span>
                  )}
                 </div>
               </div>
                )}
                <div className="flex gap-2">
                  <Input id="type" placeholder="Төрөл оруулна уу" name="type"  onChange={formik.handleChange} className={`${addtypes? "block" : "hidden"}`}></Input>
                  <Button className={`${addtypes? "block" : "hidden"}`} onClick={()=> addtype()}>Нэмэх</Button>
                </div>
              </div>
              <div className="bg-white p-6 flex flex-col gap-2 rounded-lg">
                <p className="text-base font-semibold">Таг</p>
                <Input
                  placeholder="Таг нэмэх..."
                  className="bg-[#D6D8DB] rounded-lg p-2 border-solid border border-black"
                  name="addTag"
                  id="addTag"
                  onChange={formik.handleChange}
                />
                <p className="text-sm font-normal text-[#5E6166] mb-9">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-end px-10 mb-28">
           
            <Button type="submit" className="p-6 shadow-lg" >
              <p className="text-base font-semibold">Нийтлэх</p>
            </Button>
          </div>
        </Form>
       
      </Formik>
      <Button variant={"outline"} className="p-6 shadow-lg" type="button">
              <p className="text-base font-semibold">Ноорог</p>
          </Button>
    </div >
  );
}