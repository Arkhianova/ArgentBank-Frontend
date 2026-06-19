import styles from "./SignIn.module.scss";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm"
import { useLocation } from "react-router-dom";

export default function SignIn() {
  
  let location = useLocation();

  if (location.pathname === "/login") return (
    <div className={styles.signIn}>
      <SignInForm />
    </div>
  )

  if (location.pathname === "/signup") return (
    <div className="signupform">
      <SignUpForm />
    </div>
  )

}
