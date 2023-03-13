import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import NetflixRow from "../components/NetflixRow";
import requests from "../utils/requests";

function Home() {
  return (
    <>
      <Navbar showSignInButton={true} />

      <div>
        <Banner />
        <NetflixRow title="Trending Now" url={requests.popular} isPortrait />
        <NetflixRow title="Netflix Originals" url={requests.netflixOriginals} />
        <NetflixRow title="Top Rated" url={requests.topRated} />
        <NetflixRow title="Upcoming" url={requests.upcoming} />
        <NetflixRow title="Comedy" url={requests.comedyMovies} />
        <NetflixRow title="Romance" url={requests.romanceMovies} />
        <NetflixRow title="Documentaries" url={requests.documentaries} />
        <br />
      </div>
    </>
  );
}

export default Home;
