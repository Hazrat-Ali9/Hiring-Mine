import "./JobCard.css";

export default function JobCard({ job }) {
  // console.log(job);
  return (
    <div className="bg-white p-2 py-3 card ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <h6 id="companyName" className="ms-2  mb-0">
          {job.companyName || "Not Mentioned"}
        </h6>
        <img className="me-2 " src="./assets/short logo.png" width="50rem" />
      </div>

      <h5 id="designation" className="ms-2 mt-2">
        {job.designation || "Not Mentioned"}
      </h5>

      <h5 id="salary" className="ms-2 mt-2">
        {job.salary || "Not Mentioned"}
      </h5>

      <p id="description" className="ms-2 mt-2">
        <div
          dangerouslySetInnerHTML={{
            __html: job?.desc?.slice(0, 150) || "Not Mentioned",
          }}
        />
      </p>

      <div className="d-flex justify-content-between align-items-center ms-1 pt-2 mt-4 ">
        <button
          id="btn"
          className="d-flex justify-content-center align-items-center"
        >
          Onsite
        </button>

        <div className="d-flex justify-content-center align-items-center">
          <h6 id="city " className="pe-2 text-uppercase mb-0">
            {job.city.toUpperCase() || "City"}
          </h6>
          <h6 id="country " className="pe-2 text-uppercase mb-0">
            {job.country || "Country"}
          </h6>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-end align-items-center mt-2 ">
        <p className="mb-0 pt-2 pe-2" id="views">
          150 Views
        </p>
      </div>
    </div>
  );
}
