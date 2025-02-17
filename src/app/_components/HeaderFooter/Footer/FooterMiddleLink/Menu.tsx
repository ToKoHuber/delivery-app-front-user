export function Menu() {
  return (
    <div className="flex gap-[56px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-4 font-normal leading-7 text-[#71717A]">NOMNOM </h2>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">
          Appetizers{" "}
        </p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Salads</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Pizzas</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">
          Lunch favorites
        </p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">
          Main dishes
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4 font-normal leading-7 text-black">NOMNOM </h2>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Side dish</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Brunch</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Desserts</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">Beverages</p>
        <p className="text-4 font-normal leading-6 text-[#FAFAFA]">
          Fish & Sea foods
        </p>
      </div>
    </div>
  );
}
