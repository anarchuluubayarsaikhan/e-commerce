
import { Button } from "@/components/ui/button";
import Image from "next/image";



const bankIcons = [
    {
        name: "Ard",
        imagePath: "/bankIcon/Ard.png"
    },
    {
        name: "bank",
        imagePath: "/bankIcon/bank.png"
    },
    {
        name: "bank1",
        imagePath: "/bankIcon/bank1.png"
    },
    {
        name: "bank2",
        imagePath: "/bankIcon/bank2.png"
    },
    {
        name: "BogdBank",
        imagePath: "/bankIcon/bogdBank.png"
    },
    {
        name: "KhaanBank",
        imagePath: "/bankIcon/khaanBank.png"
    },
    {
        name: "KhasBank",
        imagePath: "/bankIcon/khasBank.png"
    },
    {
        name: "Mbank",
        imagePath: "/bankIcon/Mbank.png"
    },
    {
        name: "mostMoney",
        imagePath: "/bankIcon/mostMoney.png"
    },
    {
        name: "Qpay",
        imagePath: "/bankIcon/Qpay.png"
    },
    {
        name: "TDB",
        imagePath: "/bankIcon/tdb.png"
    },
    {
        name: "TuriinBank",
        imagePath: "/bankIcon/turiinBank.png"
    },
    {
        name: "bank3",
        imagePath: "/bankIcon/bank3.png"
    },
]



export function BuyStepThree() {
    return (
        <div className=" flex flex-col items-center">
            <div className="w-[687px] bg-slate-400 rounded-2xl flex flex-col gap-4 p-8">
                <div className="flex flex-col gap-4 p-8">
                    <div className="text-lg font-semibold"> 3. Төлбөр төлөлт</div>
                    <div className="py-16 px-28">
                        <div>
                            <Image src="/clientProductImage/bankQr.png" width={329} height={129} alt="Bank Qr" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center px-10">
                        <span className="text-base font-normal">Төлөх боломжтой банкууд:</span>
                        <div className="grid grid-cols-7 gap-6">
                            {bankIcons.map((bank) => (
                                <div key={bank.name}>
                                    <Image src={bank.imagePath} width={46.88} height={46.88} alt="Bank Icon" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-9 py-2">
                    <Button variant={"outline"} className="rounded-2xl px-9 py-2">Буцах</Button>
                </div>
            </div>
        </div>
    )
}