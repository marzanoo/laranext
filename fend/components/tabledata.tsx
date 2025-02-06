"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const result = await axios("http://localhost:8000/api/users");
      console.log(result.data.result);
      setUserData(result.data.result || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((rs: any, index) => (
          <tr key={rs.id} className="bg-white border-b">
            <td className="px-3 py-6 text-black">{index + 1}</td>
            <td className="px-3 py-6 text-black">{rs.name}</td>
            <td className="px-3 py-6 text-black">{rs.email}</td>
            <td className="px-3 py-6 text-black">{rs.created_at}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href="#" className="btn btn-info">
                View
              </Link>
              <Link href="#" className="btn btn-primary">
                Edit
              </Link>
              <Link href="#" className="btn btn-secondary">
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Users;
