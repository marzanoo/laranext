"use client";

import Button from "@/components/elements/Button";
import Spinner from "@/components/spinner";
import DataTable from "@/components/tabledata";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useLogin } from "./hooks/useLogin";
import Cookies from "js-cookie";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  const router = useRouter();
  const { isLoading } = useLogin();

  if (isLoading) return null;

  const logoutHandler = async () => {
    try {
      Cookies.remove("token");
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex items-center justify_between gap-1 mb-5">
          <h1 className="text-4xl font bold">
            Next.js 14 Laravel 11 CRUD Mysql
          </h1>
        </div>
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link href="/user/create" className="btn btn-primary">
              Create
            </Link>
          </div>
          <Suspense fallback={<Spinner />}>
            <DataTable />
          </Suspense>
        </div>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </>
  );
}
