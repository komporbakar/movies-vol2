import { useEffect, useState } from "react";
import Api from "../../service/Api";
import convertMinutes from "../utils/converMinutes";
import PopupVideo from "../atoms/PopUpYoutube";
import { useParams } from "react-router-dom";

const BASE_IMG_URL = import.meta.env.VITE_APP_BASEIMAGEURL;

interface DetailType {
  id: string;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  release_date: string;
  genres: Array<{ name: string }>;
  runtime?: string;
  overview: string;
  // Tambahkan properti lain yang mungkin ada di objek detail
}

const HeaderDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();
  // const [detail, setDetail] = useState<DetailType>({ backdrop_path: "" });
  const [detail, setDetail] = useState<DetailType | null>();
  const [trailer, setTrailer] = useState<DetailType | null>();
  const [convertedTime, setConvertedTime] = useState<{
    hours: number;
    remainingMinutes: number;
  } | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const hoursMiutes = () => {
    const { hours, remainingMinutes } = convertMinutes(detail?.runtime);
    setConvertedTime({ hours, remainingMinutes });
  };

  const getTrailer = async () => {
    const res = await Api.getThumbnail(id);
    const result = res.results[0].key;
    setTrailer(result);
  };

  // hoursMiutes();

  const getDetails = async () => {
    const response = await Api.getDetails(id);
    const data = response;
    // console.log(data);
    setDetail(data);
  };
  // console.log(trailer);

  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    if (detail?.runtime) {
      hoursMiutes();
    }
    getTrailer();
  }, [detail]);
  return (
    <div className="h-[70vh] w-full relative pt-10">
      <img
        src={`${BASE_IMG_URL}/${detail?.backdrop_path}`}
        alt=""
        className="absolute w-full h-full -z-10 opacity-50"
      />
      <div className="lg:px-36 lg:py-20 pt-10 px-10 flex lg:flex-nowrap flex-wrap justify-start me-auto">
        <img
          src={`${BASE_IMG_URL}/${detail?.poster_path}`}
          alt=""
          className=" max-h-[40vh] mx-auto md:mx-0 shadow-xl rounded-lg lg:me-5"
        />
        <div className="md:max-w-[700px] w-full">
          <h3 className="text-white lg:text-4xl md:text-xl text-sm  font-bold">
            {detail?.original_title} (
            {detail?.release_date && detail.release_date.split("-")[0]})
          </h3>
          <div className="flex lg:text-2xl md:text-xl text-sm">
            {detail?.genres.map((item, i) => {
              // console.log(item);
              return (
                <h4
                  className="text-white lg:text-2xl md:text-xl text-sm me-4"
                  key={i}
                >
                  {item.name}
                </h4>
              );
            })}
            <h4 className="text-white  font-light lg:text-2xl md:text-xl text-sm">
              {convertedTime && (
                <>
                  {convertedTime.hours} H {convertedTime.remainingMinutes} M
                </>
              )}
            </h4>
          </div>
          <button
            onClick={() => setShowPopup(true)}
            className="p-1 bg-slate-700 rounded-lg text-white my-5 mx-auto flex md:mx-0 me-auto"
          >
            Trailer
          </button>

          <p className="text-2xl hidden md:flex   font-bold text-white">
            Overview
          </p>
          <p className="text-lg hidden md:flex text-white ">
            {detail?.overview}
          </p>
        </div>
      </div>
      {showPopup && (
        <PopupVideo
          videoIds={trailer}
          onClose={() => setShowPopup(false)} // Fungsi untuk menutup popup
        />
      )}
    </div>
  );
};

export default HeaderDetails;
