import styles from "./SignIn.module.scss";
import SignInForm from "../../components/SignInForm";

export default function SignIn() {
  
  return (
    <div className={styles.signIn}>
      <SignInForm />
    </div>
  );
}
