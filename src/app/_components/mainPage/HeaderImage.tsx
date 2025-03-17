import Image from "next/image";

export function HeaderImage() {
  return (
    <Image
      src="https://res.cloudinary.com/daevsbyyv/image/upload/v1742201834/k4l9zvieabefqesfqbl1.jpg"
      width={1440}
      height={570}
      alt="Picture of the author"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
