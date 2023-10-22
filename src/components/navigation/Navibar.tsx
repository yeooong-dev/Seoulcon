import { NaviWrap } from "./StNavibar";
import logo from "../../assets/images/main/logo-nav.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import menuOpen from "../../assets/images/main/ico-menu.svg";
import menuClose from "../../assets/images/main/ico-nav-close.svg";
// import menuClose from "../../assets/images/main/ico-menu-close.svg";

const Navibar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NaviWrap>
      <div className='padding'>
        <div className='left'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className={`right ${isMobileMenuOpen ? "open" : ""}`}>
          <button
            className='mobile-menu-toggle'
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={isMobileMenuOpen ? menuClose : menuOpen}
              alt='menuToggle'
            />
          </button>
          <div className='menu-container'>
            <button
              onMouseEnter={() => setOpenMenu("SeoulCon")}
              onMouseLeave={() => setOpenMenu(null)}
              className='menuBtn'
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
              className='menuBtn2'
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
              className='menuBtn3'
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
            <button className='attend menuBtn4'>Attend</button>
          </Link>

          <button className='ko'>KO</button>
          <hr />
          <button className='en'>EN</button>
        </div>
      </div>
    </NaviWrap>
  );
};

export default Navibar;
