import React from "react";
import "./Button.scss";

interface IBtn {
  _name?: string;
  value?: string;
  disabled?: boolean;
}
const Button: React.FC<IBtn> = ({ _name, value, disabled }) => {
  return (
    <button type="submit" name={_name} value={value}>
      Validez
    </button>
  );
};

export default Button;
