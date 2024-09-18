import { Input } from "@/components/ui/input"
import { Calendar } from "lucide-react"
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Tableheader() {
    return (
        <div className="w-full">
            <div className="flex gap-10 p-4">
                <div className="text-base">Бүгд</div>
                <div className="text-base">Шинэ захиалага</div>
                <div className="text-base">Бэлтгэгдэж байна</div>
                <div className="text-base">Хүргэлтэнд гарсан</div>
                <div className="text-base">Хүргэгдсэн</div>
                <div className="text-base">Цуцлагдсан</div>
            </div>
            <div className="p-12">
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <div className="text-base text-[#FFFFFF] bg-[#18BA51] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">Өнөөдөр</div>
                        <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">7 хоног</div>
                        <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center gap-1"><Calendar size={16} strokeWidth={2.5} />Сараар</div>
                    </div>
                    <Input type="email" placeholder="Дугаар, Имэйл" className="w-[300px] rounded-xl text-[#8B8E95]"/>
                </div>
            </div>
            <div className="text-xl font-semibold ml-[60px]">Захиалга</div>
            <div className="ml-[60px]">
                <div className="flex justify-between bg-[#D6D8DB]">
                    <div className="text-[#3F4145] text-sm">Захиалгын ID дугаар</div>
                    <div>Үйлчлүүлэгч</div>
                    <div>Огноо</div>
                    <div>Цаг</div>
                    <div>Төлбөр</div>
                    <div>Статус</div>
                    <div>Дэлгэрэнгүй</div>
                </div>
            </div>
        </div>
    )
}