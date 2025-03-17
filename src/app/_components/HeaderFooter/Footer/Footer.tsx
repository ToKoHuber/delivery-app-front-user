import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";
import { FooterTop } from "./FooterTop";

export function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#18181B] pt-[60px] pb-[111px]">
      {/* <div className="flex flex-col "> */}
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
      {/* </div> */}
    </div>
  );
}
