import React, { useState } from "react";
import InputField from "../InputField";
import styles from "./SignUpForm.module.scss";
import { useSignUpMutation } from "../../services/authApi.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const [signUp, { data, isLoading }] = useSignUpMutation()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(formData).unwrap();
      console.log("la reponssee vaut ------------------> : ", result.message)
      navigate("/login", {
      state: { email: formData.email }
      })
      
    }
    catch (err) {
      setError(err.data?.message)
      console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEE vaut : ", err.data.message)
     
    }
  }

  return (
        <div className={`${styles.main} ${styles.bgDark}`}>
    
    <section className={styles.signInContent}>
      
        <form onSubmit={handleSubmit}>
          <i className={`fa fa-user-circle ${styles.signUpIcon}`}></i>
        <h2>Create Account</h2>

        <InputField
          label="User name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />

        <InputField
          label="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <InputField
          label="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          />
          
        <InputField
            label="Email"
            type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
          
        <InputField
            label="Password"
            type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className={styles.signupButton}>Valider</button>

        </form>
         {error && <p className={styles.error}>{error}</p>}
    </section>
        </div>
  );
};

export default SignUpForm;