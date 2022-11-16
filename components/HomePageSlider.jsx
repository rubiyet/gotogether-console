import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function HomePageSlider() {
  return (
    <div className="h-56 sm:h-64 xl:h-[32rem]">
      <Carousel>
      <Image src="/sliders/8.jpg" alt="" width={1500} height={0} />
      <Image src="/sliders/9.jpg" alt="" width={1500} height={0} />
      <Image src="/sliders/7.jpg" alt="" width={5500} height={0} />
      </Carousel>
    </div>
  );
}
