import React from "react";
import logo from "../../assets/mh-logo-white.png";
import visionLogo from "../../assets/image 9.svg";
import styles from "./style.module.css";
import facebookIcon from "../../assets/icons/facebook-icn.svg";
import instagramIcon from "../../assets/icons/instagram-icn.svg";
import xIcon from "../../assets/icons/x-icn.svg";
import youtubeIcon from "../../assets/icons/youtube-icn.svg";
import arrowIcon from "../../assets/icons/arrow-icn.svg";

const SocialIcon = ({ path }: { path: string }) => {
  return (
    <div
      style={{
        padding: "0.8rem",
        borderRadius: "4px",
        border: "2px solid rgba(255, 255, 255, 0.20)",
      }}
    >
      <img src={path} style={{ cursor: "pointer" }}></img>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <div className={styles.title}>Portal</div>
          <hr />
          <div className={styles.subTitle}>Laws, Regulations and the Like</div>
          <div className={styles.subTitle}>Open Data Usage Policy</div>
          <div className={styles.subTitle}>Right to Information Policy</div>
          <div className={styles.subTitle}>Content Policy</div>
          <div className={styles.subTitle}>Privacy Policy</div>
          <div className={styles.subTitle}>Service Level Agreement</div>
          <div className={styles.subTitle}>Information Security</div>
          <div className={styles.subTitle}>Sitemap</div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Important Links</div>
          <hr />
          <div className={styles.subTitle}>Vision 2030</div>
          <div className={styles.subTitle}>Digital Government Authority</div>
          <div className={styles.subTitle}>National Unified Portal</div>
          <div className={styles.subTitle}>Etimad</div>
          <div className={styles.subTitle}>
            Reporting or Corruption (Nazaha)
          </div>
          <div className={styles.subTitle}>
            Reporting of Corruption to (Nazaha)
          </div>
          <div className={styles.subTitle}>Go to E-Mail</div>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>Contact Us</div>
          <hr />
          <div className={styles.subTitle}>Braches</div>
          <div className={styles.subTitle}>Contact Us</div>
          <div className={styles.subTitle}>FAQs</div>
          <div className={styles.subTitle}>Balady Report - 940</div>
          <div className={styles.subTitle}>Sakani - 199090</div>
          <div className={styles.subTitle}>Balady - 199040</div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <div className={styles.title}>Social Media</div>
            <hr />
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.7rem" }}
            >
              <SocialIcon path={facebookIcon} />
              <SocialIcon path={instagramIcon} />
              <SocialIcon path={xIcon} />
              <SocialIcon path={youtubeIcon} />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.title}>Accessibility Tools</div>
            <hr />
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.7rem" }}
            >
              <SocialIcon path={arrowIcon} />
              <SocialIcon path={arrowIcon} />
              <SocialIcon path={arrowIcon} />
              <SocialIcon path={arrowIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionRightsText}>
          All Right Reserved For Ministry of Municipal and Rural Affairs &copy;
          2024
        </div>
        <div className={styles.footerText}>
          <a>Terms and Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
