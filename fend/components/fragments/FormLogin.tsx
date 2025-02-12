"use client";

import { useEffect, useRef, useState } from "react";
import InputForm from "../elements/Input";
import Button from "../elements/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import API from "@/lib/api";
import Cookies from "js-cookie";

const FormLogin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post("/login", form);
      Cookies.set("token", response.data.access_token, { expires: 1 });
      router.push("/");
    } catch (error) {
      console.log("Login Failed", error);
    }
  };
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        ref={emailRef}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button type="submit" ClassName="btn bg-white text-black">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
