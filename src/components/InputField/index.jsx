import styles from "./InputField.module.scss";
import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  disabled = false,
  type = "text",
  name,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
