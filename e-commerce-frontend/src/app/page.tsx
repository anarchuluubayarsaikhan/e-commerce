import { Header } from "@/components/header";
import { Listitem } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Listitem />
    </div>
  );
}
