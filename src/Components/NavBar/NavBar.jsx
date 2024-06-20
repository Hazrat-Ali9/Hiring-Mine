import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid pt-3">
          <a className="navbar-brand ms-lg-5 ps-lg-5 ms-3 " href="#">
            <img src="/assets/logo.png" width="180rem" />
          </a>


<div>
  <input type="checkbox" id="checkbox" />
  <label
    for="checkbox"
    className="toggle navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <div class="bar bar--top"></div>
    <div class="bar bar--middle"></div>
    <div class="bar bar--bottom"></div>
  </label>
</div>


          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-lg-5 ps-lg-5  my-lg-2 my-lg-0 navbar-nav-scroll navItems">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  People
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Join Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Employee / Post Job
                </a>
              </li>
            </ul>

            <div className="themeDiv ">
              <img
                className="ms-lg-2"
                src="/assets/themeButton.png"
                width="50rem"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
