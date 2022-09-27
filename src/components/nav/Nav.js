import "./Nav.css";
import homeLogo from "../../images/home-icon-white.png";
import bookmarkLogo from "../../images/bookmark-icon-white.png";
import addLogo from "../../images/add-icon-white.png";
import profileLogo from "../../images/user-icon-white.png";

function Nav() {
  return (
    <div class="nav">
      <ul class="navelements">
        <li>
          <img class="navimage" alt="homelogo" src={homeLogo}></img>
        </li>
        <li>
          <img class="navimage" alt="bookmarklogo" src={bookmarkLogo}></img>
        </li>
        <li>
          <img class="navimage" alt="addlogo" src={addLogo}></img>
        </li>
        <li>
          <img class="navimage" alt="profilelogo" src={profileLogo}></img>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
