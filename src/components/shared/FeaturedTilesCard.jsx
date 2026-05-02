import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedTilesCard = ({ tile }) => {
  return (
    <Card className="border bg-[#f7f6f4] rounded-xl space-y-2 cursor-pointer">
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={tile.title}
          className="object-cover rounded-xl"
        />

        <Chip size="md" className="absolute right-25 -top-3 bg-blue-300">
          {tile.category}
        </Chip>
      </div>

      <div>
        <h2 className="font-semibold text-lg">{tile.title}</h2>
      </div>

      <div className="flex gap-2 text-sm">
        <div className="flex items-center gap-2">
          {/* <p><FaHeart /></p> */}
          <p>{tile.material}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-1">
          <p>${tile.price.toFixed(2)}</p>
          <p>{tile.currency}</p>
        </div>

        <Separator orientation="vertical" />

        <div>
            <p>{tile.dimensions}</p>
        </div>
      </div>

      <Link href={`/all-tiles/${tile.id}`}>
        {" "}
        <Button variant="tertiary" className={"w-full font-semibold text-base"}>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default FeaturedTilesCard;
