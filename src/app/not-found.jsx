import Image from "next/image";
import Link from "next/link";
import errorImage from "@/assets/error-404.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-4">
      <Image src={errorImage} alt="Error 404" width={300} height={200} />
      <Link href={"/"}>
        <button className="btn bg-green-500 text-white">
          <FaArrowLeftLong className="text-xl" /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
