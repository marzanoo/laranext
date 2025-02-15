/* eslint-disable react/display-name */
import { forwardRef } from "react";

type InputProps = {
  ClassName?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
};

const Input = forwardRef((props: InputProps, ref: any) => {
  const {
    ClassName = "input input-bordered input-primary w-full max-w-xs",
    type,
    placeholder,
    onChange = () => {},
    value,
    name,
  } = props;
  return (
    <input
      className={ClassName}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
