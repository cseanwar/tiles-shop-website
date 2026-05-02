import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedTilesCard = ({ tile }) => {
  return (
    <Card className="border bg-[#f7f6f4] rounded-xl space-y-2 cursor-pointer hover:shadow-lg hover:border-[#FFD966] hover:scale-[1.02] transition-all duration-300">
      
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          alt={tile.title}
          className="object-cover rounded-xl"
        />
        <Chip
          size="sm"
          className="absolute left-25 -top-2 bg-blue-300 capitalize text-xs"
        >
          {tile.category}
        </Chip>
      </div>

      <div className="px-2">
        <h2 className="font-semibold text-base sm:text-lg truncate">{tile.title}</h2>
      </div>

      <div className="flex flex-wrap gap-1 text-xs sm:text-sm px-2">
        <div className="flex items-center gap-1">
          <p className="text-gray-600">{tile.material}</p>
        </div>

        <Separator orientation="vertical" className="bg-gray-600 w-0.50" />

        <div className="flex items-center gap-1">
          <p className="font-semibold">${tile.price.toFixed(2)}</p>
          <p className="text-gray-400">{tile.currency}</p>
        </div>

        <Separator orientation="vertical" className="bg-gray-600 w-0.50" />

        <div>
          <p className="text-gray-600">{tile.dimensions}</p>
        </div>
      </div>

      <div className="px-2 pb-2">
        <Link href={`/all-tiles/${tile.id}`}>
          <Button variant="tertiary" className="w-full font-semibold text-sm sm:text-base">
            View Details
          </Button>
        </Link>
      </div>

    </Card>
  );
};

export default FeaturedTilesCard;