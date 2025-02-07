type LabelProps = {
  children: string;
  classname?: string;
  htmlFor?: string;
};

const Label = (props: LabelProps) => {
  const { htmlFor, classname, children } = props;
  return (
    <label className={classname} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
