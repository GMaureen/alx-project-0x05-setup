import React from "react";
import { ImageData } from "@/interfaces";

interface Props {
  image: ImageData;
}

const ImageCard = ({ image }: Props) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">Author: {image.author}</h3>
        <p className="text-sm text-gray-600">ID: {image.id}</p>
      </div>
    </div>
  );
};

export default ImageCard;