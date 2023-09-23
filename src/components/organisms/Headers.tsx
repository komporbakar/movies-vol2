import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Youtube, { YouTubeProps } from "react-youtube";
import Api from "../../service/Api";

interface ThumbnailType {
  title: string;
  id: string;
}

const Headers = () => {
  const [thumbnail, setThumbnail] = useState<ThumbnailType | null>(null);
  const [videoThumbnail, setvideoThumbnail] = useState("");
  const callListThumbnail = async () => {
    const response = await Api.getListMovies();
    const data = response.results[0];
    setThumbnail(data);
    // console.log(data);
    const res = await Api.getThumbnail(data.id);
    const result = res.results[0].key;
    // console.log(result);
    setvideoThumbnail(result);
  };

  useEffect(() => {
    callListThumbnail();
  }, []);
  const opts: YouTubeProps["opts"] = {
    height: "700",
    width: "100%",
    playerVars: {
      loop: 1,
      autoplay: 1,
      mute: 0,
      controls: 0,
      showinfo: 0,
    },
  };
  return (
    <>
      <div className="h-full w-full relative -z-30">
        <Youtube
          videoId={videoThumbnail}
          opts={opts}
          className="h-full w-full "
          onEnd={(e) => e.target.playVideo()}
          onReady={(e) => e.target.playVideo()}
          onPause={(e) => e.target.playVideo()}
        />
      </div>
      <div className="absolute left-20 top-80 my-auto z-20">
        <h1 className="text-5xl font-bold   text-white">{`${thumbnail?.title}`}</h1>
        <div className="flex flex-row justify-start space-x-5  mt-5">
          {/* <Link to={"/play"}> */}
          <div className="bg-white text-black px-10 py-2 text-xl font-medium rounded-xl flex items-center">
            Play
          </div>
          {/* </Link> */}
          <Link to={`/detail/${thumbnail?.id}`}>
            <div className="bg-opacity-60 bg-slate-500  text-white px-5 py-2 text-xl w-auto font-medium rounded-xl flex  items-center">
              More Info
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headers;
