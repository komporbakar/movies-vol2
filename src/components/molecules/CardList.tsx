import { Suspense, useEffect, useState } from "react";
import Api from "../../service/Api";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Loader from "../utils/Loader";
interface ItemTypes {
  poster_path: string;
  title: string;
  id: string;
}

const CardList = () => {
  const BASE_IMG_URL = import.meta.env.VITE_APP_BASEIMAGEURL;
  const [movies, setMovies] = useState([]);
  const callListMovies = async () => {
    const response = await Api.getListMovies();
    const data = response.results.slice(1, 19);
    setMovies(data);
  };
  //   console.log("Movies", movies);

  useEffect(() => {
    callListMovies();
  }, []);
  //   console.log(BASE_IMG_URL);
  return (
    <div className="flex flex-wrap  md:-mt-44 ">
      {movies ? (
        movies.map((item: ItemTypes, index: number) => (
          <Suspense fallback={<Loader />}>
            <div
              key={index}
              className="lg:w-1/6 md:w-1/4 w-1/2 rounded-lg px-1 cursor-pointer mb-3 "
            >
              <Link to={"/detail/" + item?.id}>
                <div className="bg-white  rounded-lg">
                  <img
                    src={`${BASE_IMG_URL}${item.poster_path}`}
                    alt={item.title}
                    className="rounded-lg shadow-xl w-full hover:opacity-50"
                  />
                </div>
              </Link>
              {/* <h2>Spider Man</h2> */}
            </div>
          </Suspense>
        ))
      ) : (
        <Skeleton count={3} />
      )}
    </div>
  );
};

export default CardList;
