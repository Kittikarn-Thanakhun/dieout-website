import { labelSocials } from '@/data/site';
import SocialList from './SocialList';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h3>About this project</h3>
          <p>
            This website was created out of personal passion for music and design. <br />
            It is a non-commercial project made for educational purposes and portfolio
            presentation only.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Deverloper Contact</h3>
          <p>Intragram: seaslatt_dev</p>
          <p>email: kittikarnforwork08@gmail.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow DIEOUT</h3>
          <SocialList items={labelSocials} owner="DIEOUT" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SEASLATT Dev. All rights reserved.</p>
      </div>
    </footer>
  );
}
