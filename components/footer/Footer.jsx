import styles from "./Footer.module.css";
import { SocialMediaList } from "@/components/ui/footer/socialMedia/SocialMediaList";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Your Company Name. All rights reserved.</p>
      <SocialMediaList />
    </footer>
  );
};
