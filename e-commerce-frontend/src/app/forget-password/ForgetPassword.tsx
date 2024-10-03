import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgetPassword({ submit }: { submit: () => void }) {
  return (
    <div className="max-w-[334px] mx-auto grid gap-5 py-20">
      <h1 className="text-center text-[#09090B] text-xl font-semibold">
        Нууц үг сэргээх
      </h1>
      <Input
        type="email"
        placeholder="Имэйл хаяг оруулах"
        className="w-full rounded-full"
      />
      <Button className="w-full bg-[#2563EB] rounded-full" onClick={submit}>
        Илгээх
      </Button>
    </div>
  );
}
