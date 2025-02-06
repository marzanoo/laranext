import Spinner from "@/components/spinner";
import Users from "@/components/tabledata";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
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
          <Users />
        </Suspense>
      </div>
    </div>
  );
}
