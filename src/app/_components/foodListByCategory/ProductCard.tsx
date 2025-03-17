import Image from "next/image";

export function ProductCard({ food }) {
  return (
    <div className="min-w-[397px] max-w-[397px]     h-[342px] p-4 rounded-[20px] flex flex-col gap-[20px] overflow-hidden bg-[#FFF]">
      <div className="rounded-[12px] overflow-hidden">
        <Image
          src={food.image}
          width={365}
          height={210}
          alt="Picture of the food"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col gap-[8px] justify-between">
        <div className="flex justify-between">
          <h3 className="text-[#EF4444] text-6 font-semibold leading-8 ">
            {food.foodName}
          </h3>
          <p className="text-[#09090B] text-[18px] font-semibold leading-7">
            {food.price} ₮
          </p>
        </div>
        <div>
          <p>{food.ingredients}</p>
        </div>
      </div>
    </div>
  );
}
