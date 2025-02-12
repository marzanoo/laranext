"use client";

import { useRouter } from "next/navigation";
import Button from "../elements/Button";
import InputForm from "../elements/Input";
import Cookies from "js-cookie";
import API from "@/lib/api";
import { useEffect, useRef, useState } from "react";

const FormRegister = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post("/register", form);
      Cookies.set("token", response.data.access_token, { expires: 1 });
      router.push("/auth/login");
    } catch (error) {
      console.log("Register Failed", error);
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Name"
        ref={nameRef}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default FormRegister;
