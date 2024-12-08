import React from "react";
import "./Input.scss";

interface IInput {
  placeholder: string;
  type: string;
  name: string;
  title?: string;
}
const Input: React.FC<IInput> = ({ placeholder, type, name, title }) => {
  return (
    <label>
      <span>{title}</span>
      <input placeholder={placeholder} type={type} name={name} />
    </label>
  );
};

export default Input;
