// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from 'swiper/modules';
// import banner1 from "@/assets/banner-1.webp";
// import banner2 from "@/assets/banner-2.webp";
// import banner3 from "@/assets/banner-3.webp";
// import banner4 from "@/assets/banner-4.webp";
// import Image from "next/image";

// import "swiper/swiper-bundle.css";
import Link from "next/link";
import 'animate.css';

const Banner = () => {
  return (
    <div className="h-150 w-full bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col gap-5 justify-center items-center text-center text-[#FFFFFF] py-10">
        <h1 className="text-7xl text-left leading-20">Discover <br /> Your <br /> Perfect <br /> Aesthetic</h1>
        <p>
          Curated material selections for the modern architect. <br /> Explore our
          gallery of artisanal ceramics, <br /> natural stones, and
          precision-engineered tiles.
        </p>
        <Link href="/all-tiles">
          <button className="bg-[#333736] hover:bg-[#555555] py-3 px-7 cursor-pointer animate__animated animate__shakeY">Browse Now</button>
        </Link>
      </div>

      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner1}
              alt="Living room tiles"
              width={800}
              height={400}
              className="w-full"
            />
            <div className="absolute bottom-60 left-0 right-0 text-center space-y-5">
              <h2 className="text-7xl text-white leading-23">
                Shaping Dreams <br /> Into Living Spaces
              </h2>
              <p className="text-base text-white">
                Set the tone of your space with tiles that go beyond function
              </p>
              <Link href={"/all-tiles"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Browse Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner2}
              alt="Outdoor tiles"
              width={800}
              height={400}
              className="w-full"
            />
            <div className="absolute bottom-55 left-0 right-0 text-center space-y-5">
              <h2 className="text-7xl text-white leading-23">
                Beauty That Lasts <br /> Beyond Seasons
              </h2>
              <p className="text-base text-white">
                Build to endure, designed to captivate. Our tiles are crafted to
                withstand <br /> the test of time, ensuring your space remains
                stunning for years to come.
              </p>
              <Link href={"/all-tiles"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Browse Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner3}
              alt="Kitchen tiles"
              width={800}
              height={400}
              className="w-full"
            />
            <div className="absolute bottom-55 left-0 right-0 text-center space-y-5">
              <h2 className="text-7xl text-white leading-23">
                Where Tile Meets <br /> Culinary Craft
              </h2>
              <p className="text-base text-white">
                Elevate your kitchen with our exquisite tiles, designed to inspire culinary creativity <br /> and transform your cooking space into a masterpiece of style and functionality.
              </p>
              <Link href={"/all-tiles"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Browse Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
            src={banner4}
            alt="Bathroom tiles"
            width={800}
            height={400}
            className="w-full"
          />
          <div className="absolute bottom-60 left-0 right-0 text-center space-y-5">
              <h2 className="text-7xl text-white leading-23">
                Timeless Tiles for <br /> Tranquil Spaces
              </h2>
              <p className="text-base text-white">
                Elevate your bathroom with our timeless tiles, designed to create
              </p>
              <Link href={"/all-tiles"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-sm cursor-pointer">
                  Browse Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Banner;
