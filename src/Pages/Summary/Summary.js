import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Summary = ({ fetchdData }) => {
  const count = useSelector((state) => state.counter.countr);
  const htmlPart = fetchdData.data[count].show.summary;
  return (
    <>
      <article className="w-full h-screen bg-red-200 ">
        <h2 className="m-auto w-1/2 h-12  text-center flex  justify-center underline  pt-24 ">
          Summary
        </h2>
        <div
          className="pt-24 w-1/2 m-auto text-2xl italic"
          dangerouslySetInnerHTML={{ __html: htmlPart }}
        />
        <Link to="/formPage" className="no-underline text-black absolute left-1/4 top-2/3">
          {" "}
          <button
            className={`w-32 h-12 border-2 border-black rounded-md
       bg-slate-400 text-lg font-bold 
       shadow-inner  transition  ease-in-out
      delay-150 hover:shadow-black hover:text-slate-200`}
          >
            Book
          </button>
        </Link>
      </article>
    </>
  );
};

export default Summary;
