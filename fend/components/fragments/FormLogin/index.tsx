import { useEffect, useRef, useState } from "react";
import InputForm from "../elements/Input";
import Button from "../elements/Button";
import axios from "axios";

const FormLogin = () => {
  const [user, setUser] = useState<
    { name: string; email: string; password: string }[]
  >([]);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/users");
      console.log(result.data.users);
      setUser(result.data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handlerLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.currentTarget.email as HTMLInputElement).value,
      password: (e.currentTarget.password as HTMLInputElement).value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handlerLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
