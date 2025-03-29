import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMovie } from "../features/movie/MovieAction";

export default function Movidetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.movie)
  useEffect(() => {
    console.log("MovieDetail useEffect");
    dispatch(fetchMovie(params.id));
    console.log(detail)
  }, [dispatch]);

  
  return (
    <>
      <section

      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${detail.backdrop_path})`
      }}
        className="bg-cover  bg-top bg-no-repeat"
      >
        <div className=" w-90 h-screen  p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-5xl">
          {detail.original_title}
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
{detail.overview}
            </p>

            <div className="mt-4 sm:mt-8">
              <a target="_blank"
                href={detail.homepage}
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
               View Movie
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
