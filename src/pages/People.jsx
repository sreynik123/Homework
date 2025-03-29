import { useDispatch, useSelector } from "react-redux";
import PeopleCard from "../components/PeopleCard";
import { useEffect } from "react";
import { fetchPeople } from "../features/People/PeopleAction";

export default function People() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.people);
  useEffect(() => {
    console.log("people  page useEffect");
    dispatch(fetchPeople());
  }, []);
  return (
    <div className=" bg-white py-24 sm:py-32">
      <div className="  p-15 shadow-lg grid grid-cols-4 gap-10">
        {data.results &&
          data.results.map((person, index) => (
            <PeopleCard
              name={person.name}
              profile_path={`https://media.themoviedb.org/t/p/w470_and_h470_face${person.profile_path}`}
              popularity={person.popularity}
              overview={person.known_for[0].overview}
            />
          ))}
      </div>
    </div>
  );
}
