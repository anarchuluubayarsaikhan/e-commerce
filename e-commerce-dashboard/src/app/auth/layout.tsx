import { SideBAr } from "@/components/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex gap-10">
        <SideBAr />
        <main className="w-[calc(100%-250px)] p-5 bg-white">{children}</main>
      </body>
    </html>
  );
}
