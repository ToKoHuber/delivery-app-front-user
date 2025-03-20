"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogoHorizon } from "../logos/LogoHorizon";
import { SheetBasket } from "../sheet/Sheet";

export function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center w-full bg-[#18181B] px-[88px] py-3 top-5 left-5 right-5 bottom-[232px]">
      <div className="flex justify-between items-center w-[1440px]">
        <LogoHorizon />
        <div className="flex w-[153px] gap-3">
          <Button
            variant="secondary"
            className="rounded-full text-[14px] font-medium leading-5"
            onClick={() => router.push("/signUp")}
          >
            Sign up
          </Button>
          <Button
            variant="destructive"
            className="rounded-full text-[14px] font-medium leading-5"
            onClick={() => router.push("/logIn")}
          >
            Sign in
          </Button>
          <SheetBasket />
        </div>
      </div>
    </div>
  );
}
