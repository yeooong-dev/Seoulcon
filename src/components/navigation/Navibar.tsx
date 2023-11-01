import { Dim, NaviWrap } from "./StNavibar";
import logo from "../../assets/images/main/logo-nav.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuOpen from "../../assets/images/main/ico-menu.svg";
import menuClose from "../../assets/images/main/ico-nav-close.svg";
import menuToggleOpen from "../../assets/images/main/ico-menu-close.svg";
import menuToggleClose from "../../assets/images/main/ico-menu-open.svg";
import { Wrapper } from "../../pages/main/StMain";

const Navibar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSeoulConOpen, setIsSeoulConOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSeoulConHovered, setIsSeoulConHovered] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isSeoulConSubMenuActive = [
    "/about",
    "/bi",
    "/lineup",
    "/goods",
  ].includes(location.pathname);

  const isProgramSubMenuActive = [
    "/festival",
    "/conference",
    "/contents",
    "/performance",
  ].includes(location.pathname);

  const isInfoSubMenuActive = ["/timeline", "/notice", "/tourist"].includes(
    location.pathname
  );

  const isAttendSubMenuActive = ["/attend"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setIsSeoulConOpen(false);
        setIsProgramOpen(false);
        setIsInfoOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  return (
    <Wrapper>
      <Dim
        className={`dim ${isMobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></Dim>
      <NaviWrap
        ref={navRef}
        isSeoulConOpen={isSeoulConOpen}
        isProgramOpen={isProgramOpen}
        isInfoOpen={isInfoOpen}
        isScrolled={isScrolled}
      >
        <div className='padding'>
          <div className='background-blur' />
          <div className='left'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>

          <button
            className='mobile-menu-toggle'
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={isMobileMenuOpen ? menuClose : menuOpen}
              alt='menuToggle'
            />
          </button>

          <div className={`right ${isMobileMenuOpen ? "open" : ""}`}>
            <div
              className='menu-container'
              onMouseEnter={() => {
                if (window.innerWidth > 820) {
                  setIsSeoulConOpen(true);
                  setIsProgramOpen(false);
                  setIsInfoOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 820) {
                  setIsSeoulConOpen(false);
                }
              }}
            >
              <button
                className={`menuBtn ${isSeoulConSubMenuActive ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth <= 820) {
                    setIsProgramOpen(false);
                    setIsInfoOpen(false);
                    setIsSeoulConOpen(!isSeoulConOpen);
                  }
                }}
              >
                <span>SEOULCon</span>
                <div>
                  <img
                    src={isSeoulConOpen ? menuToggleClose : menuToggleOpen}
                    alt='메뉴 열기'
                    className='toggle'
                  />
                </div>
              </button>
              {isSeoulConOpen && (
                <div className='submenu'>
                  <Link to='/about'>
                    <button>About</button>
                  </Link>

                  <Link to='/bi'>
                    <button>BI</button>
                  </Link>

                  <Link to='/lineup'>
                    <button>Influencer line up</button>
                  </Link>

                  {/* <Link to='/goods'>
                    <button>Goods</button>
                  </Link> */}
                </div>
              )}
            </div>

            <div
              className='menu-container'
              onMouseEnter={() => {
                if (window.innerWidth > 820) {
                  setIsProgramOpen(true);
                  setIsSeoulConOpen(false);
                  setIsInfoOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 820) {
                  setIsProgramOpen(false);
                }
              }}
            >
              <button
                className={`menuBtn2 ${isProgramSubMenuActive ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth <= 820) {
                    setIsSeoulConOpen(false);
                    setIsInfoOpen(false);
                    setIsProgramOpen(!isProgramOpen);
                  }
                }}
              >
                <span>Program</span>
                <div>
                  <img
                    src={isProgramOpen ? menuToggleClose : menuToggleOpen}
                    alt='메뉴 열기'
                    className='toggle'
                  />
                </div>
              </button>
              {isProgramOpen && (
                <div
                  className='submenu col'
                  onMouseEnter={() => setIsProgramOpen(true)}
                  onMouseLeave={() => setIsProgramOpen(false)}
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

            <div
              className='menu-container'
              onMouseEnter={() => {
                if (window.innerWidth > 820) {
                  setIsInfoOpen(true);
                  setIsSeoulConOpen(false);
                  setIsProgramOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 820) {
                  setIsInfoOpen(false);
                }
              }}
            >
              <button
                className={`menuBtn3 ${isInfoSubMenuActive ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth <= 820) {
                    setIsProgramOpen(false);
                    setIsSeoulConOpen(false);
                    setIsInfoOpen(!isInfoOpen);
                  }
                }}
              >
                <span>Information</span>
                <div>
                  <img
                    src={isInfoOpen ? menuToggleClose : menuToggleOpen}
                    alt='메뉴 열기'
                    className='toggle'
                  />
                </div>
              </button>
              {isInfoOpen && (
                <div
                  className='submenu'
                  onMouseEnter={() => setIsInfoOpen(true)}
                  onMouseLeave={() => setIsInfoOpen(false)}
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

            <div className='menu-container'>
              <Link to='/attend'>
                <button
                  className={`menuBtn4 ${
                    isAttendSubMenuActive ? "active" : ""
                  }`}
                >
                  <span>Attend</span>
                </button>
              </Link>
            </div>

            <button className='ko'>KO</button>
            <hr />
            <button className='en'>EN</button>
          </div>
        </div>
      </NaviWrap>
    </Wrapper>
  );
};

export default Navibar;
