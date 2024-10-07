"use client"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Userpart() {
    return (
        <div className="flex flex-col gap-[49px]">
            <div className="text-tersiaryBlack text-lg font-bold">Хэрэглэгчийн хэсэг</div>
            <div className="flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="овог" className="font-medium text-sm">Овог:</Label>
                    <Input type="text" id="овог" className="rounded-[18px] max-w-[620px]" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="нэр" className="font-medium text-sm">Нэр:</Label>
                    <Input type="text" id="нэр" className="rounded-[18px] max-w-[620px]" />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="утасны дугаар" className="font-medium text-sm">Утасны дугаар:</Label>
                    <Input type="text" id="утасны дугаар" className="rounded-[18px] max-w-[620px]" />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                    <Label htmlFor="email" className="font-medium text-sm">Имэйл хаяг:</Label>
                    <Input type="email" id="email" className="rounded-[18px] max-w-[620px]" />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="хаяг" className="font-medium text-sm">Хаяг</Label>
                    <Textarea id="хаяг" className="rounded-[18px] max-w-[620px]" />
                </div>
            </div>
        </div>
    )
}