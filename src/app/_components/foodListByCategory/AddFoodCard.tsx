"use client";
import { Minus, Pencil, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export function AddFoodCard({ food }) {
  const [totalCount, setTotalCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(food.price);

  function AddButton() {
    setTotalCount((prevCount) => {
      const newCount = prevCount + 1;
      setTotalPrice(newCount * food.price);
      return newCount;
    });
  }

  function MinusButton() {
    setTotalCount((prevCount) => {
      if (prevCount > 1) {
        const newCount = prevCount - 1;
        setTotalPrice(newCount * food.price);
        return newCount;
      }
      return prevCount;
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="size-[44px] bg-[#FFFFFF] rounded-full flex justify-center items-center cursor-pointer">
          <Pencil className="size-4" stroke="#EF4444" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[826px] h-[412px] p-[24px] rounded-[20px] flex gap-[24px] overflow-hidden bg-[#FFF]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="rounded-[12px] min-w-[377px] h-[364px] overflow-hidden relative">
          <Image
            src={food.image}
            alt={food.foodName}
            fill
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col w-[377px] justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#EF4444] text-6 font-semibold leading-8">
              {food.foodName}
            </h3>
            <p>{food.ingredients}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <p>Total Price</p>
                <p className="text-[#09090B] text-[18px] font-semibold leading-7">
                  {totalPrice.toLocaleString()} ₮
                </p>
              </div>
              <div className="flex gap-3 w-[121px] items-center">
                <Button
                  variant="outline"
                  className="size-[44px] rounded-full"
                  onClick={MinusButton}
                >
                  <Minus />
                </Button>
                <p>{totalCount}</p>
                <Button
                  variant="outline"
                  className="size-[44px] rounded-full"
                  onClick={AddButton}
                >
                  <Plus />
                </Button>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="w-[377px] px-[32px] py-[8px] rounded-full"
                >
                  Add to card
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
