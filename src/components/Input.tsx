import React from "react";
import "./Input.scss";

interface IInput {
  placeholder: string;
  type: string;
  name: string;
  title?: string;
  className?: string;
  onChange?: (e: any) => void;
}
const Input: React.FC<IInput> = ({
  placeholder,
  type,
  name,
  title,
  className,
  onChange,
}) => {
  return (
    <label>
      <span className={className}>{title}</span>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
