import Link from "next/link";

const AuthLayout = (props: any) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3-xl font-bold mb-2 text-center text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-slate-600">
          Welcome, please login to your account
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link href="/auth/register" className="font-bold text-blue-600">
              Register
            </Link>
          ) : (
            <Link href="/auth/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
