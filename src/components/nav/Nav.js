import "./Nav.css";
import homeLogo from "../../images/home-icon-white.png";
import bookmarkLogo from "../../images/bookmark-icon-white.png";
import addLogo from "../../images/add-icon-white.png";
import profileLogo from "../../images/user-icon-white.png";


function Nav({navState, setNavState}) {
  

  
  return (
    <div class="nav">
      <ul class="navelements">
        <li
          onClick={() => setNavState(1)}
          class={navState === 1 ? "navelement--active" : ""}
        >
          <img class="navimage" alt="homelogo" src={homeLogo}></img>
        </li>
        <li
          onClick={() => setNavState(2)}
          class={navState === 2 ? "navelement--active" : ""}
        >
          <img class="navimage" alt="bookmarklogo" src={bookmarkLogo}></img>
        </li>
        <li
          onClick={() => setNavState(3)}
          class={navState === 3 ? "navelement--active" : ""}
        >
          <img class="navimage" alt="addlogo" src={addLogo}></img>
        </li>
        <li
          onClick={() => setNavState(4)}
          class={navState === 4 ? "navelement--active" : ""}
        >
          <img class="navimage" alt="profilelogo" src={profileLogo}></img>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
