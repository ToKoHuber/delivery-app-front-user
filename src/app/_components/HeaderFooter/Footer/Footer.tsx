import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";
import { FooterTop } from "./FooterTop";

export function Footer() {
  return (
    <div className="w-full bg-black pt-[60px] pb-[111px]">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
}
