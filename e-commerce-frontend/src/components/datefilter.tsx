import { Input } from "@/components/ui/input"
import { Calendar } from "lucide-react"

export function Datefilter() {
    return (
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div className="text-base text-[#FFFFFF] bg-[#18BA51] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">Өнөөдөр</div>
                <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">7 хоног</div>
                <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center gap-1"><Calendar size={16} strokeWidth={2.5} />Сараар</div>
            </div>
            <Input type="email" placeholder="Дугаар, Имэйл" className="w-[300px] rounded-xl text-[#8B8E95]" />
        </div>
    )
}