import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function HomePageSlider() {
  return (
    <div className="h-full">
      <Carousel
      leftControl
      rightControl
      >
      <Image src="/books/2.jpg" alt="" width={5500} height={0} />
      <Image src="/books/3.jpg" alt="" width={5500} height={0} />
      <Image src="/books/4.jpg" alt="" width={5500} height={0} />
      </Carousel>
    </div>
  );
}
