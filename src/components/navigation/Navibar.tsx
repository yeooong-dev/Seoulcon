import { NaviWrap } from "./StNavibar";
import logo from "../../assets/images/main/logo-nav.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import menuOpen from "../../assets/images/main/ico-menu.svg";
import menuClose from "../../assets/images/main/ico-nav-close.svg";
import menuToggleOpen from "../../assets/images/main/ico-menu-close.svg";
import menuToggleClose from "../../assets/images/main/ico-menu-open.svg";
import { Wrapper } from "../../pages/main/StMain";

const Navibar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSeoulConOpen, setIsSeoulConOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setIsSeoulConOpen(false);
        setIsProgramOpen(false);
        setIsInfoOpen(false);
      }
    };

    // 외부 클릭 이벤트 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <NaviWrap
        ref={navRef}
        isSeoulConOpen={isSeoulConOpen}
        isProgramOpen={isProgramOpen}
        isInfoOpen={isInfoOpen}
      >
        <div className='padding'>
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
            <div className='menu-container'>
              <button
                onMouseEnter={() => setOpenMenu("SeoulCon")}
                onMouseLeave={() => setOpenMenu(null)}
                className='menuBtn'
                onClick={() => {
                  setIsSeoulConOpen(!isSeoulConOpen);
                  setIsProgramOpen(false);
                  setIsInfoOpen(false);
                }}
              >
                SEOULCon
                <div>
                  <img
                    src={isSeoulConOpen ? menuToggleClose : menuToggleOpen}
                    alt='메뉴 열기'
                    className='toggle'
                  />
                </div>
              </button>
              {isSeoulConOpen && (
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
                onClick={() => {
                  setIsProgramOpen(!isProgramOpen);
                  setIsSeoulConOpen(false);
                  setIsInfoOpen(false);
                }}
              >
                Program
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
                onClick={() => {
                  setIsInfoOpen(!isInfoOpen);
                  setIsSeoulConOpen(false);
                  setIsProgramOpen(false);
                }}
              >
                Information
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

            <div className='menu-container'>
              <Link to='/attend'>
                <button className='menuBtn4'>Attend</button>
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
