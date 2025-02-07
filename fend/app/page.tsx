"use client";

import Button from "@/components/elements/Button";
import Spinner from "@/components/spinner";
import DataTable from "@/components/tabledata";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/logout", // Endpoint logout di Laravel
        {},
        { withCredentials: true } // Ini penting untuk session
      );

      router.push("/auth/login"); // Redirect setelah logout
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify_between gap-1 mb-5">
        <h1 className="text-4xl font bold">Next.js 14 Laravel 11 CRUD Mysql</h1>
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
      <Button
        type="submit"
        onClick={() => {
          logoutHandler;
        }}
      >
        Logout
      </Button>
    </div>
  );
}
