import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const FeaturedTilesCard = ({ tile }) => {
  return (
    <Card className="border rounded-xl space-y-2">
      <div className="relative w-full aspect-square">
        <Image
          src={tile.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={tile.title}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
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
