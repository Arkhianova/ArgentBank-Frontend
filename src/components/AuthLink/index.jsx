import styles from "./AuthLink.module.scss";
import Logo from "../Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice"
import { useGetProfileQuery } from "../../services/profileApi.js";
import { apiSlice } from '../../services/apiSlice.js'

export default function AuthLink() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state) => state.auth.token)

 const {
  data: profile,
   isLoading,
  isFetching
} = useGetProfileQuery(undefined, {
  skip: !token,
})

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
     dispatch(apiSlice.util.resetApiState())
    navigate("/")
  }
  if (isLoading) return <>...</>
  const username = profile?.body?.userName

const showUsername = token && username

  return (
    <div>
      {showUsername ? (
        <>
          <NavLink to="/profile" className={styles.authItem}>
            <i className={`fa fa-user-circle ${styles.connected}`}></i>{" "}
            {username}
          </NavLink>

          <button onClick={handleLogout} className={styles.authItem}>
            Sign Out
          </button>
        </>
      ) : (<>
        <NavLink to="/login" className={styles.authItem}>
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
        <NavLink to="/signup" className={styles.authItem}>
          Sign Up
        </NavLink>
        </>
      )}
    </div>
  )
}