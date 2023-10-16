import { NaviWrap } from "./StNavibar";
import logo from "../../assets/images/main/logo-nav.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <NaviWrap>
      <div className='left'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className='right'>
        <div className='menu-container'>
          <button
            onMouseEnter={() => setOpenMenu("SeoulCon")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            SeoulCon
          </button>
          {openMenu === "SeoulCon" && (
            <div
              className='submenu'
              onMouseEnter={() => setOpenMenu("SeoulCon")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to='/about'>
                <button>About</button>
              </Link>

              <Link to='/bi'>
                <button>BI</button>
              </Link>

              <Link to='/lineup'>
                <button>Influencer line up</button>
              </Link>

              <Link to='/goods'>
                <button>Goods</button>
              </Link>
            </div>
          )}
        </div>

        <div className='menu-container'>
          <button
            onMouseEnter={() => setOpenMenu("Program")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Program
          </button>
          {openMenu === "Program" && (
            <div
              className='submenu'
              onMouseEnter={() => setOpenMenu("Program")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to='/festival'>
                <button>Festival</button>
              </Link>

              <Link to='/conference'>
                <button>Conference</button>
              </Link>

              <Link to='/contents'>
                <button>Content/Fashion/Beauty</button>
              </Link>

              <Link to='/performance'>
                <button>Performance/Entertainment</button>
              </Link>
            </div>
          )}
        </div>

        <div className='menu-container'>
          <button
            onMouseEnter={() => setOpenMenu("Info")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            Information
          </button>
          {openMenu === "Info" && (
            <div
              className='submenu'
              onMouseEnter={() => setOpenMenu("Info")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to='/timeline'>
                <button>Timeline</button>
              </Link>

              <Link to='/notice'>
                <button>Notice</button>
              </Link>

              <Link to='/tourist'>
                <button>Tourist Sights</button>
              </Link>
            </div>
          )}
        </div>

        <Link to='/attend'>
          <button>Attend</button>
        </Link>

        <button>KO</button>
        <hr />
        <button>EN</button>
      </div>
    </NaviWrap>
  );
};

export default Navibar;
