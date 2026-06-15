import styles from "./Logo.module.scss";
import logoAB from "../../../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    
      <NavLink to="/" className={styles.mainNavLogo}>
        <img
          className={styles.mainNavLogoImage}
          src={logoAB}
          alt="Argent Bank Logo"
        />
        <h1 className="srOnly">Argent Bank</h1>
      </NavLink>
    
  );
}
