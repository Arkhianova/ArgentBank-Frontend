import styles from "./AuthLink.module.scss";
import Logo from "../Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice"

export default function AuthLink() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
}
  
  
  return (
    <div>
      {isAuthenticated ? (
        <>
         <NavLink to="/profile" className={styles.authItem }>
          <i className={`fa fa-user-circle ${styles.connected}`}></i>{" "}
          Username
        </NavLink>
        <button onClick={handleLogout} className={styles.authItem}>
          Sign Out
        </button>
        </>
      ) : (
        <NavLink to="/login" className={styles.authItem}>
          <i className="fa fa-user-circle"></i>{" "}
          Sign In
        </NavLink>
      )}
    </div>
  )
}

// bouton lorsqu'on est authentifié : 
{/* <div>
       <NavLink to="/" className={styles.authItem}>
          <i className="fa fa-user-circle connected"></i>{" "}
          Sign Out
      </NavLink>
</div> */}

// il faut aussi ajouter le fait que lorsqu'on clique sur le bouton sign out,
//  on doit dispatch l'action logout pour supprimer le token et rediriger vers la page d'accueil.
