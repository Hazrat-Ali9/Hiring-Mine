import { Link, useParams } from "react-router-dom";
import "./NavBarTwo.css";
import { useEffect, useState } from "react";
import { useFetchData } from "../../CumstomHook/useDataFetch";

export default function NavBarTwo( { pageNum, setPageNum }) {
  const [input, setInput] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid pt-md-2">
          <a className="navbar-brand ms-md-5 ps-lg-5 logo " href="#">
            <Link to={"/"}>
              <img src="/assets/logo.png" width="180rem" />
            </Link>
          </a>

          <div
            className="d-flex justify-content-between   mt-1 searchMain"
            style={{ width: "60%" }}
          >
            <div
              className="input-group me-3"
              style={{ backgroundColor: "transparent !important" }}
            >
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="form-control inputValue h-100"
                placeholder="Find Job"
              />
              <Link to={`/jobs/${input}`}>
              <span onClick={() => setPageNum(1)}
                className="input-group-text searchIcon bg-transparent searchBtn"
              >
                <img src="/assets/search icon.png" width="20rem" />
              </span></Link>
            </div>
            <div className=" me-md-5 pe-md-5">
              <img src="/assets/themeButton.png" width="50rem" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
