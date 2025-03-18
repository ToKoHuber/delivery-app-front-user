import DeliveryPhoto from "./_components/DeliveryPhoto";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-around bg-[#FFFFFF]">
      {children}
      <DeliveryPhoto />
    </div>
  );
}
