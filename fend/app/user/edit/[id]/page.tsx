"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditUserPage = () => {
  const { id } = useParams();
  //   console.log(id);
  const [userField, setUserField] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/users/${id}`);
      console.log(result.data.users);
      setUserField(result.data.users);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const changeUserFieldHandler = (e: any) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    // console.log(userField);
  };

  const onSubmitChange = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        `http://localhost:8000/api/usersupdate/${id}`,
        userField
      );
      //   console.log(result.data.result);
      window.location.href = "/";
    } catch (error) {
      console.log("Something Went Wrong", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit User</h1>
      <form action="" onSubmit={onSubmitChange}>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-white">
            ID: {id}
          </label>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="" className="block text-sm font-medium text-white">
            Full Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="name"
            placeholder="Full Name"
            value={userField.name}
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="" className="block text-sm font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            className="input input-bordered input-primary w-full max-w-xs"
            name="email"
            placeholder="Email"
            id="email"
            value={userField.email}
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="" className="block text-sm font-medium text-white">
            Full Name:
          </label>
          <input
            type="text"
            className="input input-bordered input-primary w-full max-w-xs"
            name="password"
            placeholder="Password"
            id="password"
            onChange={changeUserFieldHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
