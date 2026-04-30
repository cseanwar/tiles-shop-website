import Marquee from "react-fast-marquee";

const tiles = [
  {
    _id: "1",
    title: "New Arrivals: Ariel Blue | Weekly Feature: Modern Geometric Patterns | Join the Community: @TILEMEX",
  },
  {
    _id: "2",
    title: "New Arrivals: Coastal Clay | Weekly Feature: Natural Textures | Join the Community: @TILEMEX",
  },
  {
    _id: "3",
    title: "New Arrivals: Mountain Mist | Weekly Feature: Elegant Simplicity | Join the Community: @TILEMEX",
  },
];

const LatestTiles = () => {
  return (
    <div className="bg-[#C3C7C630]">
        <div className="flex justify-between gap-4 items-center p-4 container mx-auto">
      <button className="px-6.25 py-2.25 bg-[#D72050] text-[#FFFFFF] text-xl">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {tiles.map((tile) => (
          <span key={tile._id} className="mx-10">
            {tile.title}
          </span>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default LatestTiles;
