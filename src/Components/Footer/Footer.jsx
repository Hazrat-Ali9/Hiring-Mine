import "./Footer.css";

export default function Footer() {
  return (
    <div
      className="container-fluid px-0"
      style={{ background: "linear-gradient(180deg,#4d3bdb 0%,#9747ff 100%)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-12  m-lg-5 p-4 text-align-center d-flex flex-column justify-content-center align-items-center ">
            <div className="footerLogoDiv w-100">
            <img src="./assets/white logo.png" className="footerLogo" width="150rem" />
            </div>
            <p className="mt-3 footerPara">HiringMine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</p>
          </div>

          <div className="col-md-4 col-12  m-lg-5 p-4 ps-5 text-align-center text-align-md-start d-flex flex-column justify-content-start align-items-center">
            <h6 className="footerH6 text-align-start">Contact Us</h6>
            <p className="footerEmail">HiringMine@gmail.com</p>
          </div>
        </div>
      </div>

          <div className="d-flex justify-content-center align-items-center flex-column endingLineDiv">
            <p className="m-0 pb-1 mt-2">Privacy Policy</p>
            <p className="m-0 pb-1">Copyright Hiringmine 2024. All Rights Reserved</p>
          </div>
    </div>
  );
}
