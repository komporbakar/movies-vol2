import { useEffect, useState } from "react";
import Api from "../../service/Api";
import { useParams } from "react-router-dom";
import ActorSwipper from "../molecules/Carousel/ActorSwipper";

const MainDetail = () => {
  const [actor, setActor] = useState([]);
  const { id } = useParams<{ id: string | undefined }>();
  const callApiMoviesTopRated = async () => {
    if (id) {
      const response = await Api.getActors(parseInt(id));
      // console.log(response);
      const data = response.cast;
      setActor(data);
    }
  };
  useEffect(() => {
    if (id) {
      callApiMoviesTopRated();
    }
  }, [id]);
  //   console.log(actor);
  return (
    <div className="bg-black  mt-24 md:px-14 ">
      <ActorSwipper items={actor} title="Actors" />
    </div>
  );
};

export default MainDetail;
