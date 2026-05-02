import Link from "next/link";
import "animate.css";

const Banner = () => {
  return (
    <div className="min-h-[400px] md:min-h-[550px] lg:min-h-[600px] w-full bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="w-full h-full min-h-[400px] md:min-h-[550px] lg:min-h-[600px] bg-black/40 flex flex-col gap-5 justify-center items-center text-center text-white px-4 py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left">
          Discover <br /> Your <br /> Perfect <br /> Aesthetic
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md">
          Curated material selections for the modern architect. Explore our gallery of artisanal ceramics, natural stones, and precision-engineered tiles.
        </p>

        <Link href="/all-tiles">
          <button className="bg-[#333736] hover:bg-[#555555] text-white text-sm sm:text-base py-3 px-7 cursor-pointer rounded animate__animated animate__shakeY transition-colors duration-300">
            Browse Now
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Banner;
