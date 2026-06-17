import React, { useState } from "react";
import InputField from "../InputField";
import styles from "./EditForm.module.scss";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../services/profileApi.js";
import { useSelector, useDispatch } from "react-redux";
import { setEditionMode } from "../../store/profile/profileSlice";


const EditForm = () => {

  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const {data: profile, isLoading} = useGetProfileQuery(undefined, {
    skip: !token,
  });
  const [updateProfile] = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    username: profile?.body?.userName,
    firstName: profile?.body?.firstName,
    lastName: profile?.body?.lastName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData.username);
    dispatch(setEditionMode(false));
  };

  const handleCancel = () => {
    dispatch(setEditionMode(false));
  };

  return (
        <div className={`${styles.main} ${styles.bgDark}`}>
    
    <section className={styles.signInContent}>
      
      <form onSubmit={handleSave}>
        <h2>Edit user info</h2>

        <InputField
          label="User name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <InputField
          label="First name"
          name="firstName"
          value={formData.firstName}
          disabled={true}
          onChange={handleChange}
        />

        <InputField
          label="Last name"
          name="lastName"
          value={formData.lastName}
          disabled={true}
          onChange={handleChange}
        />

        <button type="submit">Save</button>

        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </section>
    </div>);
};

export default EditForm;