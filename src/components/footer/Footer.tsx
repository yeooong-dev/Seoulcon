import logoFooter from "../../assets/images/main/logo-footer.svg";
import icoYoutube from "../../assets/images/main/ico-youtube.svg";
import icoInsta from "../../assets/images/main/ico-insta.svg";
import icoMail from "../../assets/images/main/ico-mail.svg";
import { FooterWrap } from "./StFooter";

const Footer = () => {
  return (
    <FooterWrap>
      <div className='top'>
        <img src={logoFooter} alt='logo' />
      </div>
      <div className='bottom'>
        <div className='left'>
          <p>Copyrights SEOULCON. All rights reserved.</p>
        </div>
        <div className='right'>
          <img src={icoYoutube} alt='youtube' />
          <img src={icoInsta} alt='instagram' />
          <img src={icoMail} alt='mail' />
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
