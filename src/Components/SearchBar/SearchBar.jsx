import { useState } from "react";
import PopularSearchBtn from "../PopularSearchBtn/PopularSearchBtn";
import "./SearchBar.css";
import { useFetchData } from "../../CumstomHook/useDataFetch.jsx";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const popularSearches = [
    "Software ",
    "Developer",
    "Backend",
    "React",
    "Node",
    "React Native",
    "Flutter",
    "UI/UX",
    "Designer",
    "Web",
    "SEO",
    "Marketing",
  ];

  return (
    <>
      <div className="container" style={{ borderColor: "red" }}>
        <h1 className="heading mt-5 pt-sm-5">
          Dig. Apply <br /> Prepare Your Future
        </h1>
        <p className="para">
          Hiring Mine connects employer and job seekers, where employers are
          <br />
          the source of the resources and the job seeker can find and apply for
          <br /> their targeted job.
        </p>

        <div className="d-flex justify-content-between justify-content-md-start  mt-3 ">
          <div className="input-group me-3 inputDiv">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="form-control inputValue"
              placeholder="Find Job"
            />
            <span className="input-group-text searchIcon bg-transparent searchBtn">
              <img src="/assets/search icon.png" width="20rem" />
            </span>
          </div>
          {/* find button */}
          <Link to={`/jobs/${inputValue}`}>
            <button className="findBtn">Find Jobs</button>
          </Link>
        </div>

        <h1 className="heading2 mt-5">Popular Searches</h1>

        <div className="popularSearchesDiv mt-4 d-flex justify-content-start gap-3 flex-wrap align-items-center">
          {popularSearches.map((item) => (
            <PopularSearchBtn name={item} />
          ))}
        </div>
      </div>
    </>
  );
}
