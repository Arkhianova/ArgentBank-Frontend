import styles from "./Nav.module.scss";
import Logo from "../Logo";
import AuthLink from "../AuthLink";


export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <AuthLink />
    </nav>
  );
}
