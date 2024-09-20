import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
const stores = [
    {name: "Дэлгүүрийн төрлөө оруулна уу",
     buttonname:"Дэлгүүрийн төрөл",
     id:"r1",
     value:"type"
    },
    {name: "Эхний бүтээгдэхүүнээ нэмнэ үү",
     buttonname:"Бүтээгдэхүүн нэмэх",
     id:"r2",
     value:"product"
    },
    {name: "Хүргэлтийг тохируулна уу",
     buttonname:"Хүргэлт тохируулах",
     id:"r3",
     value:"delivery"
    }
    
]
export function StoreProfile () {
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl py-8 px-[29px] border">
            <div className="font-semibold text-lg text-buttonPrimary">Дэлгүүрийн профайл үүсгэх</div>
            <RadioGroup defaultValue="comfortable">
                {stores.map ((store) => 
                    <div className="flex justify-between items-center border border-tagGrayBg rounded-xl py-[14px] px-3">
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value={store.value} id={store.id}/>
                        <Label htmlFor={store.id} className="text-iconPrimary text-base font-normal">{store.name}</Label>
                    </div>
                    <Button variant="outline" className="text-buttonPrimary font-semibold text-sm rounded-[8px] py-2 px-4 border border-tagLightGrayBg">{store.buttonname}</Button>
                    </div>
                )}
                
            </RadioGroup>
    </div>
    )
}