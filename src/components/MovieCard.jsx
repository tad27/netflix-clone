import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { truncate } from "../utils/functions";

function MovieCard({ movie, isPortrait = false }) {
  const [liked, setLiked] = useState(false);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="relative group">
      <img
        className={`${
          isPortrait
            ? "min-w-[160px] max-h-[280px]"
            : "min-w-[170px] max-h-[180px]"
        }  object-cover`}
        src={`${baseURL}${
          isPortrait
            ? movie?.poster_path || movie?.backdrop_path
            : movie?.backdrop_path
        }`}
        alt={movie?.title}
      />
      <div className="scale-0 absolute group-hover:scale-100 transition-transform inset-0 bg-brand-black/90 flex items-center justify-center">
        <div
          className="absolute top-1 right-1"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <FaHeart className="cursor-pointer fill-brand-red hover:scale-90 hover:opacity-75 transition-all" />
          ) : (
            <FaRegHeart className="cursor-pointer hover:scale-90 hover:opacity-75 transition-all" />
          )}
        </div>
        <p className="text-xs text-center">{truncate(movie?.title, 15)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
