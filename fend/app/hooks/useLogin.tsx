"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.replace("/auth/login"); // ✅ Paksa redirect sebelum render
    } else {
      setIsLoading(false); // ✅ Izinkan render jika token ada
    }
  }, [router]);

  return { isLoading };
};
