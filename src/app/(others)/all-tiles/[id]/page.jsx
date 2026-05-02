import Image from "next/image";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://json-server-noux.onrender.com/tiles");
  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);

  return (
    <div className="bg-[#C3C7C630] px-4 sm:px-6 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 justify-center items-start mb-16">
          <div className="flex flex-col gap-2 w-full md:w-[400px] lg:w-[500px] shrink-0">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
              {tile?.title}
            </h1>
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
              <Image
                src={tile.image}
                alt={tile.title}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:flex-1 pt-16">
            <table className="table-auto border-collapse w-full text-left text-sm sm:text-base">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500 w-32 sm:w-40">
                    Description
                  </td>
                  <td className="py-3">{tile.description}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Category
                  </td>
                  <td className="py-3 capitalize">{tile.category}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Price
                  </td>
                  <td className="py-3 font-semibold">
                    ${tile.price.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Currency
                  </td>
                  <td className="py-3">{tile.currency}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Dimensions
                  </td>
                  <td className="py-3">{tile.dimensions}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Material
                  </td>
                  <td className="py-3">{tile.material}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-3 pr-6 text-gray-500">
                    Stock
                  </td>
                  <td>{tile.inStock.toString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
