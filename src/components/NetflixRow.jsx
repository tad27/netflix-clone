import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slideLeft, slideRight } from "../utils/functions";

import MovieCard from "./MovieCard";
// import { icons } from "react-icons";

function NetflixRow({ title, url, isPortrait }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const rowId = title?.toLowerCase().split(" ").join("-");

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const res = await axios.get(url);
      setMovies(res.data.results);
      setLoading(false);
    }
    getMovies();
  }, [url]);

  return (
    <section className="pl-4 md:pl-8 mr-4 mt-6 relative">
      <h2
        className={`text-white text-xl font-semibold mb-2 ${
          isPortrait && "uppercase"
        }`}
      >
        {title}
      </h2>
      <div
        id={rowId}
        className="netflix-slider flex gap-2 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        <FaChevronLeft
          className="icon left-5"
          onClick={() => slideLeft(rowId)}
        />
        <FaChevronRight
          className="icon right-5"
          onClick={() => slideRight(rowId)}
        />
        {loading ? (
          <div className="flex gap-2 items-center justify-center h-full text-white/20">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="min-w-[160px] min-h-[180px] bg-brand-black brightness-125"
              ></div>
            ))}
          </div>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie?.id} movie={movie} isPortrait={isPortrait} />
          ))
        )}
      </div>
    </section>
  );
}

export default NetflixRow;
