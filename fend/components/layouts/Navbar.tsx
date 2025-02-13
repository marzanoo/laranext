"use client";

import API from "@/lib/api";
import { useState, useEffect } from "react";
import Button from "../elements/Button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState<{ name?: string }>({}); // Pastikan state awal berupa object kosong
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.warn("Token not found, user not logged in");
          return;
        }

        const result = await API.get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("User Data:", result.data); // Debugging data API

        // Pastikan response sesuai dengan yang diharapkan
        if (result.data.name) {
          setUser(result.data); // Set langsung ke state
        } else {
          console.warn("Invalid user data format");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const logoutHandler = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };

  return (
    <div className="bg-slate-600 block w-full h-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-white font-semibold">
          {user.name ? user.name : "Guest"}
        </p>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
