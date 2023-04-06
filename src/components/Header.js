
// import Programs from "./Programs/Programs";

function Header() {
  return (
    <div className="header-container">
      <div className="title">
        <div className="circle"> </div>
        <h1>
          NESA <span>by MAKERS</span>
        </h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <button>PROGRAMS</button>
          </li>
          <li>
            <button>ABOUT US</button>
          </li>
          <li>
            <button>BECOME A STUDENT</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
