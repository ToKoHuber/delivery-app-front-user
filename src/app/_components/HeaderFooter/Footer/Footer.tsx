import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";
import { FooterTop } from "./FooterTop";

export function Footer() {
  return (
    <div className="w-full flex justify-center items-center bg-[#18181B] pt-[60px] pb-[111px]">
      <div className="flex flex-col  w-[1440px]">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </div>
  );
}
