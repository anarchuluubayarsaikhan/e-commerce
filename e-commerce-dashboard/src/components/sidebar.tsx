import { TableHeader } from "@/components/ui/table";
import { Clipboard, LayoutGrid, NotepadText, Settings, Tag } from "lucide-react";
import { Tableheader } from "./tableheader";

export function SideBAr() {
    return (
        <div className="flex">
            <div className="bg-[#FFFFFF] p-3 flex flex-col ml-[13px] gap-9 mt-[15px]">
                <button className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 text-nowrap"><LayoutGrid size={24} strokeWidth={3} absoluteStrokeWidth />Хяналтын самбар</button>
                <button className="flex gap-4 text-headerBlack text-base hover:bg-gray-300"><Clipboard size={24} strokeWidth={3} />Захиaлга</button>
                <button className="flex gap-4 text-headerBlack text-base hover:bg-gray-300"><Tag size={24} strokeWidth={3} absoluteStrokeWidth />Орлого</button>
                <button className="flex gap-4 text-headerBlack text-base hover:bg-gray-300"><NotepadText size={24} strokeWidth={3} />Бүтээгдэхүүн</button>
                <button className="flex gap-4 text-headerBlack text-base hover:bg-gray-300"><Settings size={24} strokeWidth={3} absoluteStrokeWidth />Тохиргоо</button>
            </div>
        </div>
    )
}