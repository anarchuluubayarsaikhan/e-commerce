import { Header } from "@/components/header";
import { Userpart } from "@/components/userPart";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Userpart />
    </div>
  );
}
