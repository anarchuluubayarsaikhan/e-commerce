import { Button } from "@/components/ui/button";
import { z } from "zod";
import message from "../../../public/message.png";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export function Confirm({ submit }: { submit: () => void }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  return (
    <div className="flex flex-col items-center gap-5 py-20">
      <Image src={message} alt="message picture" />
      <h1 className="text-lg text-[#09090B] font-semibold">Баталгаажуулах</h1>
      <h2 className="text-nowrap text-[#18181B]">
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </h2>
      <Form {...form}>
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <div className="text-[#71717A] text-sm">Дахин илгээх (30)</div>

      <Button
        onClick={submit}
        className="w-full max-w-[334px] mx-auto bg-[#2563EB] rounded-full"
      >
         Баталгаажуулах
      </Button>
    </div>
  );
}
