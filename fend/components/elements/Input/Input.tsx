import { forwardRef } from "react";

type InputProps = {
  ClassName?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  value?: string;
  name: string;
  ref?: any;
};

const Input = forwardRef((props: InputProps, ref) => {
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
