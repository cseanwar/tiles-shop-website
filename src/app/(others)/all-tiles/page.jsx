"use client";

import FeaturedTilesCard from "@/components/shared/FeaturedTilesCard";
import { SearchField } from "@heroui/react";
import { useEffect, useState } from "react";
import 'animate.css';

const AllTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://json-server-noux.onrender.com/tiles")
      .then((res) => res.json())
      .then((data) => setTiles(data));
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-[#C3C7C630]">
      <div className="container mx-auto my-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold mb-4">All Photos</h1>

          <div className="w-[500px] animate__animated animate__zoomInDown">
            <SearchField
              className="gap-2"
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
            >
              <SearchField.Group className="rounded-md py-5 border-2">
                <SearchField.SearchIcon className="text-blue-500" />
                <SearchField.Input
                  className="font-semibold"
                  placeholder="Search tiles by title..."
                />
                <SearchField.ClearButton className="text-red-500" />
              </SearchField.Group>
            </SearchField>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {filteredTiles.length > 0 ? (
            filteredTiles.map((tile) => (
              <FeaturedTilesCard key={tile.id} tile={tile} />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500 text-lg py-20">
              No tiles found for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTiles;
