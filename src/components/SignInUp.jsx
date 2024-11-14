import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SignInOut = () => {
  const [formData, setFromData] = useState({ emailId: "", pass: "" });
  const handleChange = (type, e) => {
    if (type === "email") {
      setFromData({ ...formData, emailId: e.target.value });
    } else {
      setFromData({ ...formData, pass: e.target.value });
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="form-container w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
        <div className="header">Sign In</div>
        <div className="email-id mb-4">
          <label htmlFor="email" className="font-bold mb-3">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="password mt-2">
          <label htmlFor="email" className="font-bold">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            value={formData.pass}
            onChange={(e) => handleChange("pass", e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
            placeholder="Enter your password"
            required
          />
        </div>
        <div
          className="submit cursor-pointer p-2 bg-cyan-800 mt-2 text-cyan-50"
          onClick={() => {
            dispatch({ type: "adminAccess", payload: formData });
            setFromData({ emailId: "", pass: "" });
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default SignInOut;
