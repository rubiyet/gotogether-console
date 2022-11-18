import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { array } from "../customValue/customValue";

export default function HomePageSlider() {
  return (
    <div className="h-[42rem]">
      <Carousel leftControl rightControl>
        {array.map((item) => {
          return (
            <Link href="/" key={item}>
              <Image
                src={"/books/" + item + ".jpg"}
                alt=""
                width={5500}
                height={0}
                className="w-[30rem] h-[42rem]"
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
