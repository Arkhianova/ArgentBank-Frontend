import styles from "./Profile.module.scss";
import { useGetProfileQuery } from "../../services/profileApi.js";
import EditForm from "../../components/EditForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditionMode } from "../../store/profile/profileSlice";


export default function Profile() {
  const { data: profile, isLoading } = useGetProfileQuery();
  const isEditingProfile = useSelector((state) => state.profile.isEditingProfile)
  const dispatch = useDispatch()
  const showEditForm = () => {
    dispatch(setEditionMode(true))
  }
  if (isLoading) return null;

  const firstName = profile?.body?.firstName;
  const lastName = profile?.body?.lastName;

  return (
    <div className={`${styles.bgDark} ${styles.main}`}>
      {isEditingProfile
        ? <><EditForm /></>
        : <div className={styles.header}>
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button className={styles.editButton} onClick={showEditForm} >Edit Name</button>
          </div>
      }
      <h2 className="srOnly">Accounts</h2>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
          <p className={styles.accountAmount}>$2,082.79</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={styles.accountContentWrapper + " " + styles.cta}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
          <p className={styles.accountAmount}>$10,928.42</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={styles.accountContentWrapper + " " + styles.cta}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.accountAmount}>$184.30</p>
          <p className={styles.accountAmountDescription}>Current Balance</p>
        </div>
        <div className={styles.accountContentWrapper + " " + styles.cta}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
    </div>
   );
}
