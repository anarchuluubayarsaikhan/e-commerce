import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Confirm() {
  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <Image src="" alt="message picture" />
      <h1 className="text-lg text-[#09090B] font-semibold">Баталгаажуулах</h1>
      <h2 className="text-nowrap text-[#18181B]">
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </h2>
      <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
      <div className="text-[#71717A] text-sm">Дахин илгээх (30)</div>

      <Button
        className="w-full max-w-[334px] mx-auto bg-[#2563EB] rounded-full"
      >
         Баталгаажуулах
      </Button>
    </div>
  );
}
