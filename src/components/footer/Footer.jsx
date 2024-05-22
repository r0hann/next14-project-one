import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>rohan</div>
      <div className={styles.text}>
        Rohan © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
