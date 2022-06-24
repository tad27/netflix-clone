import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import { randomize, truncate } from "../utils/functions";
import Loading from "./Loading";

function Banner() {
  const [currentMovie, setCurrentMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getCurrentMovie() {
      setLoading(true);
      const { data } = await axios.get(requests.popular);
      const randomNumber = randomize(data.results.length);
      setCurrentMovie(data.results[randomNumber]);
      setLoading(false);
    }
    getCurrentMovie();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <header
      style={{
        backgroundImage: `url(${baseURL}${currentMovie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="h-[648px] w-full object-cover
      text-white relative -z-1
      "
    >
      <div className="bg-gradient-to-r from-brand-black to-transparent h-full flex flex-col justify-center space-y-4 p-4 md:p-8 ">
        <h1 className="max-w-lg text-2xl sm:text-3xl md:text-5xl font-extrabold">
          {currentMovie.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          <button className="button button-transparent">Play</button>
          <button className="button button-transparent">MyList</button>
        </div>
        <p className="text-sm sm:max-w-[75%] md:max-w-[50%] lg:max-w-[40%]">
          {truncate(currentMovie?.overview, 150)}
        </p>
      </div>

      {/* Banner bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-brand-black h-16"></div>
    </header>
  );
}

export default Banner;
