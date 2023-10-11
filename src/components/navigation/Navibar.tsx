import { NaviWrap } from "./StNavibar";
import logo from "../../assets/images/logo-nav.svg";

const Navibar = () => {
  return (
    <NaviWrap>
      <div className='left'>
        <img src={logo} alt='logo' />
      </div>

      <div className='right'>
        <button>SeoulCon</button>
        <button>Program</button>
        <button>Information</button>
        <button>Attend</button>
        <button>KO</button>
        <hr />
        <button>EN</button>
      </div>
    </NaviWrap>
  );
};

export default Navibar;
