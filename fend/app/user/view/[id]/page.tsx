"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const ViewUserPage = () => {
  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  }, [id]);

  const [user, setUser]: any = useState({});

  const fetchUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/users/${id}`);
      console.log(result.data.users);
      setUser(result.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);
  return (
    <div className="max-w-2xl mx-auto mt-5">
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="text-2xl text-center mb-2">View User</h1>
        <table className="table table-zebra">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th>S No.</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </Suspense>
    </div>
  );
};

export default ViewUserPage;
