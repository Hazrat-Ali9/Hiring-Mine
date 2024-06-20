import "./Jobs.css";
import JobCard from "../JobCard/JobCard";
import { useFetchData } from "../../CumstomHook/useDataFetch";
import { useEffect } from "react";

export default  function Jobs() {
  const latestJobs = useFetchData("https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=");
  latestJobs && console.log(latestJobs);

  useEffect(() => {
    if (latestJobs) {
      dispatch({ type: "CHANGE_JOBS", payload: latestJobs });
      console.log(state.jobs);
    };
  }, []);
  return (
    <div
      className="container-fluid jobsDiv pb-4"
      style={{ backgroundColor: "#fbfaff" }}
    >
      <div className="container">
        <div className="jobsH1Div pt-5">
          <h1 className="jobsH1 ">
            <span className="jobsSpan">Latest And Top</span> Job Openings
          </h1>

          {/* jobs cards */}
          <div className="mt-5 d-flex  gap-4 justify-content-center align-items-center flex-wrap">
            {latestJobs &&latestJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
