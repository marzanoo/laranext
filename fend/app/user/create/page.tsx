"use client";

import axios from "axios";
import React, { useState } from "react";

const CreateUserPage = () => {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });
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
      const result = await axios.post(
        "http://localhost:8000/api/addnew",
        userField
      );
      console.log(result.data.result);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New User</h1>
      <div>
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Full Name"
              onChange={(e) => changeUserFieldHandler(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Email"
              onChange={(e) => changeUserFieldHandler(e)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Password"
              onChange={(e) => changeUserFieldHandler(e)}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => onSubmitChange(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
