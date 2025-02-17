import { LogoVertical } from "../../logos/LogoVertical";
import { FollowUs } from "./FooterMiddleLink/FollowUs";
import { Menu } from "./FooterMiddleLink/Menu";
import { NOMNOM } from "./FooterMiddleLink/NOMNOM";

export function FooterMiddle() {
  return (
    <div className=" mt-[76px] mx-[88px]">
      <div className="flex gap-[220px]">
        <LogoVertical />
        <div className="flex gap-[112px]">
          <NOMNOM />
          <Menu />
          <FollowUs />
          <div></div>
        </div>
      </div>
    </div>
  );
}
