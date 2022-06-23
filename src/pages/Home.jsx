import React from "react";
import Banner from "../components/Banner";
import NetflixRow from "../components/NetflixRow";
import requests from "../requests";

function Home() {
  return (
    <div>
      <Banner />
      <NetflixRow title="Trending Now" url={requests.popular} isPortrait />
      <NetflixRow title="Top Rated" url={requests.topRated} />
      <NetflixRow title="Upcoming" url={requests.upcoming} />
      <br />
    </div>
  );
}

export default Home;
