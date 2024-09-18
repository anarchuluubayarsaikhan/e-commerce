"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

export function ProductUpload({ open }: { open: boolean }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 bg-primaryGray">
        <div className="max-w-xl flex flex-col gap-6 p-6">
          <div className="bg-white flex flex-col gap-4 p-6 rounded-xl">
            <div className="flex flex-col gap-2 text-sm font-semibold">
              Бүтээгдэхүүний нэр
              <Input placeholder="Нэр" className="bg-slate-100" />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              Нэмэлт мэдээлэл
              <Textarea
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                className="max-w-lg"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              Барааны код
              <Input
                type="number"
                placeholder="#123456"
                className="bg-slate-100"
              />
            </div>
          </div>
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              <CarouselItem className="pl-1">
                <div className="p-1">
                  <Card className="max-w-[125px] h-[125px] rounded-2xl">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold"></span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="grid grid-cols-2">
            <Input placeholder="Үндсэн үнэ" className="bg-slate-100" />
            <Input placeholder="Үлдэгдэл тоо ширхэг" className="bg-slate-100" />
          </div>
        </div>
        <div className="max-w-xl flex flex-col gap-6 p-6 bg-primaryGray">
          <Select>
            Ерөнхий ангилал
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Сонгох" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            Дэд ангилал
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сонгох" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <p>Төрөл</p>
            <div className="flex gap-2 items-center">
              <p>Өнгө</p>
              <Button variant="outline" className="rounded-full">
                +
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <p>Хэмжээ</p>
              <Button variant="outline" className="rounded-full bg-primaryGray">
                +
              </Button>
            </div>
            <Button variant="outline" className="rounded-xl bg-primaryGray">
              Төрөл нэмэх
            </Button>
          </div>
          <div>
            Tag
            <Input placeholder="Таг нэмэх..." />
            <p>Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-end">
        <Button variant={"outline"}>Ноорог</Button>
        <Button>Нийтлэг</Button>
      </div>
    </div>
  );
}
