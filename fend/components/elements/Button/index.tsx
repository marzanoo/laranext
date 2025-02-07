type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  ClassName?: string;
  children?: string;
};

const Button = (props: ButtonProps) => {
  const {
    type,
    onClick = () => {},
    ClassName = "btn bg-red-500 text-white border-none",
    children,
  } = props;
  return (
    <button className={ClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
