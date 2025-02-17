import { FacebookIcon, Instagram } from "lucide-react";

export function FollowUs() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-normal leading-7 text-[#71717A]">
        FOLLOW US
      </h2>
      <div className="flex gap-4">
        <FacebookIcon size={24} stroke="white" />
        <Instagram size={24} stroke="white" />
      </div>
    </div>
  );
}
