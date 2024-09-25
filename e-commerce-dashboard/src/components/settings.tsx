"use client"

import { open } from "fs"
import { useState } from "react"
import { ShopType } from "./shoptype"

const settings = [
    {
        name: "Баннер зураг ",
        buttonname: "солих"
    },
    {
        name: "Эхний бүтээгдэхүүнээ нэмнэ үү",
        buttonname: "Бүтээгдэхүүн нэмэх"
    },
    {
        name: "Хүргэлтийг тохируулна уу",
        buttonname: "Хүргэлт тохируулах"
    }
]

export function Settings() {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl py-8 px-[29px] border">
            <div className="font-semibold text-lg text-buttonPrimary">Тохиргоо</div>
            <div className="flex flex-col gap-2">
                {settings.map((setting) =>
                    <div className="flex justify-between items-center border border-tagGrayBg rounded-xl py-[14px] px-3">
                        <p className="text-base font-normal text-buttonPrimary">{setting.name}</p>
                        <button className={`text-buttonPrimary font-semibold text-sm rounded-[8px] py-2 px-4 border border-tagLightGrayBg  }`}>{setting.buttonname}</button> 
                    </div>
                )}

            </div>
        </div>
    )
}