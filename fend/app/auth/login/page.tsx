"use client";

import AuthLayout from "@/components/layouts/AuthLayout";
import LoginView from "@/views/Login";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <LoginView />
    </AuthLayout>
  );
};

export default LoginPage;
