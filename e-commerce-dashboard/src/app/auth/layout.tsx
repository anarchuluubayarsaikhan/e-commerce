import { Header } from "@/components/header";
import { SideBAr } from "@/components/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex ">
          <SideBAr />
          <main className="w-[calc(100%-250px)] p-5 bg-white">{children}</main>
        </div>
      </body>

    </html>
  );
}
