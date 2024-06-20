import SkillsButton from "../SkillsButton/SkillsButton";
import "./DetailCard.css";
import CloseIcon from "@mui/icons-material/Close";
import TagsButton from "../TagsButton/TagsButton";

export default function DetailCard({
  detailCard,
  setDetailCard,
  details,
  setdetails,
}) {
  console.log(details);

  return (
    <div className="mb-3 " style={{ display: detailCard ? "block" : "none" }}>
      <div className="bg-white p-0 py-3 DetailCard ">
        <div style={{ position: "sticky !important" }}>
          <div className="d-flex justify-content-between align-items-center w-100 ">
            <img
              className="me-2 ms-2 "
              src="/assets/short logo.png"
              width="50rem"
            />

            <CloseIcon
              className="me-2 ms-2"
              style={{ cursor: "pointer" }}
              onClick={() => setDetailCard(false)}
            />
          </div>

          <div
            style={{ borderBottom: "1px solid darkgray", padding: "15px 8px" }}
          >
            <h5 id="designation" className=" ms-2 mt-2">
              {details?.designation && details?.designation}
            </h5>
            <h6 id="companyName" className="companyName ms-2  mb-0">
              {details?.companyName && details?.companyName || "Company Name"}
            </h6>

            <div className=" d-flex justify-content-start align-items-center ms-2 mt-2">
              <div className="locationDiv w-50 d-flex justify-content-start align-items-center">
                <h6 id="city " className="pe-2 text-uppercase mb-0">
                  {details?.City && details?.City || "City" }
                </h6>
                <h6 id="country " className="pe-2 text-uppercase mb-0">
                  {details?.Country && details?.Country || "Country"}
                </h6>
              </div>

              <div className="viewsDiv w-100 d-flex justify-content-end align-items-center  ">
                <p className="mb-0 pt-2 pe-2" id="views">
                  {details?.views && details?.views} Views
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* job detail */}

        <div
          style={{ borderBottom: "1px solid darkgray", padding: "15px 8px" }}
        >
          <h6 id="title" className="p-0 m-0 ms-1">
            Job Details
          </h6>

          <div>
            <h5 id="salary" className="salary ms-2 mt-2 pb-0 mb-0">
              Salary
            </h5>
            <p className="ms-2 mt-0 pt-1" style={{ fontSize: "15px" }}>
              {details?.salary ? details?.salary : "Not Mentioned"}
            </p>
          </div>

          <div className="ms-2 mt-2">
            <h6 id="jobTime" className="mb-0">
              Job Time
            </h6>
            <p className="m-0  mt-1 pt-0 " style={{ fontSize: "15px" }}>
              {details?.jobTime ? details?.jobTime : "Not Mentioned"}
            </p>
          </div>
        </div>

        {/* skills */}

        <div
          style={{ borderBottom: "1px solid darkgray", padding: "15px 8px" }}
        >
          <h6 id="skills" className="m-0 ms-2 ">
            Skills
          </h6>
          <div className="w-100 d-flex justify-content-start align-items-center align-items-center flex-wrap ms-2 mt-2">
            {details?.skills &&
              details?.skills?.map((skill) => <SkillsButton skill={skill} />)}
          </div>
        </div>

        <div
          style={{ borderBottom: "1px solid darkgray", padding: "15px 8px" }}
        >
          <h6 id="desc" className="ms-2 mt-2">
            Description
          </h6>

          <p
            className="ms-2 mt-2"
            style={{ fontSize: "15px", lineHeight: "25px" }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: details?.desc || "Not Mentioned",
              }}
            />
          </p>
        </div>
        <div style={{ padding: "15px 8px" }}>
          <h6 id="tags" className="ms-2 mt-2">
            Tags
          </h6>

          <div className="w-100 d-flex justify-content-start align-items-center align-items-center flex-wrap ms-2 mt-2">
            {(details?.hashTags &&
              details?.hashTags?.map((tag) => <TagsButton tag={tag} />)) ||
              "No Tags Mentioned"}
          </div>
        </div>
      </div>
    </div>
  );
}
