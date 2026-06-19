import styles from "./SignInForm.module.scss";
import { useSignInMutation } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import { useLocation } from "react-router-dom";

export default function SignInForm() {

 const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [signIn, { isLoading }] = useSignInMutation();
  const navigate = useNavigate()

 

  const handleSubmit = async (e) => {
    e.preventDefault()

   try {
     await signIn({ email, password })
    navigate("/profile")
    } catch (err) {
      setError(err.data?.message)
  }
  };

  return (
    
    <div className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              autoFocus={email ? true : false}
            />
          </div>

          <button type="submit" className={styles.signInButton}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </section>
      </div>

  );
}