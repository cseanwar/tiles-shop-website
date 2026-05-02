import FeaturedTilesCard from "./FeaturedTilesCard";


const FeaturedTiles = async () => {
  const res = await fetch("https://json-server-noux.onrender.com/tiles");
  const tiles = await res.json();
  const featuredTiles = tiles.slice(0, 4);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold my-5">Featured Tiles</h1>

      <div className="grid grid-cols-4 gap-5">
        {featuredTiles.map((tile) => (
          <FeaturedTilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
