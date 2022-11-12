import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function HomePageSlider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80">
      <Carousel>
      <Image src="/sliders/2.jpg" alt="" width={1500} height={0} />
      <Image src="/sliders/3.jpg" alt="" width={1500} height={0} />
      <Image src="/sliders/1.jpg" alt="" width={5500} height={0} />
      </Carousel>
    </div>
  );
}
