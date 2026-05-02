import Image from "next/image";
import React from "react";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://json-server-noux.onrender.com/tiles");
  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);

  return (
    <div className="bg-[#C3C7C630]">
      <div className="container mx-auto flex gap-6 justify-center items-center mb-30">
        <div className="w-[500px] h-[300px] shrink-0">
          <h1 className="text-center font-bold text-4xl my-5">
            {tile?.title}
          </h1>
          <Image
            src={tile.image}
            alt={tile.title}
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <table className="table-auto border-collapse w-full text-left mt-40">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Description
                </td>
                <td className="py-2">{tile.description}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Category
                </td>
                <td className="py-2 capitalize">{tile.category}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Price
                </td>
                <td className="py-2">${tile.price.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Currency
                </td>
                <td className="py-2">{tile.currency}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Dimensions
                </td>
                <td className="py-2">{tile.dimensions}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Material
                </td>
                <td className="py-2">{tile.material}</td>
              </tr>
              <tr>
                <td className="font-semibold py-2 pr-10 text-gray-500">
                  Stock
                </td>
                <td>{tile.inStock.toString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
