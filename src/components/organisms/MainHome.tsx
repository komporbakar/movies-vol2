// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Api from "../../service/Api";
import CardList from "../molecules/CardList";
import CardSwiper from "../molecules/Carousel/CardSwiper";
// import Api from "../../service/Api";

const MainHome = () => {
  const [topRated, setTopRated] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const callApiMoviesTopRated = async () => {
    const response = await Api.getTopRated();
    const data = response.results;
    setTopRated(data);
  };

  const callApiTvSeriesPopuler = async () => {
    const response = await Api.getPopularTvSeries();
    const data = response.results;
    setPopularSeries(data);
  };

  useEffect(() => {
    callApiMoviesTopRated();
    callApiTvSeriesPopuler();
  }, []);
  return (
    <div className="bg-black-mt-10 mt-10 md:px-14 ">
      <CardList />
      <CardSwiper items={topRated} title="Top Rated" />
      <CardSwiper items={popularSeries} title="Popular TV Series" />
    </div>
  );
};

export default MainHome;
