import React, { useState, useEffect } from "react";
import "./app.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { showNotify, hideNotify } from "./redux/slices/notifySlice";

export default function App() {
  const notify = useSelector((store) => store.notify);
  console.log(notify, "Selector");

  const dispatch = useDispatch();

  const [check, setCheck] = useState({
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  // 🔔 Trigger toast dynamically
  useEffect(() => {
    if (notify.visible) {
      if (notify.type === "success") toast.success(notify.message);
      else if (notify.type === "error") toast.error(notify.message);
      else toast.info(notify.message);

      dispatch(hideNotify());
    }
  }, [notify, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!check.email || !check.password || !check.age || !check.gender) {
      dispatch(
        showNotify({
          message: "Please fill all the fields!",
          type: "error",
        })
      );
    } else {
      dispatch(
        showNotify({
          message: "Registration successful!",
          type: "success",
        })
      );
      setCheck({ email: "", password: "", age: "", gender: "" });
    }
  };

  return (
    <div className="parent">
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleRegister}>
          <label>Email</label>
          <input
            type="email"
            value={check.email}
            onChange={(e) => setCheck({ ...check, email: e.target.value })}
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            value={check.password}
            onChange={(e) => setCheck({ ...check, password: e.target.value })}
            placeholder="Enter your password"
          />

          <label>Age</label>
          <input
            type="number"
            value={check.age}
            onChange={(e) => setCheck({ ...check, age: e.target.value })}
            placeholder="Enter your age"
          />

          <label>Gender</label>
          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={check.gender === "male"}
                onChange={(e) => setCheck({ ...check, gender: e.target.value })}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={check.gender === "female"}
                onChange={(e) => setCheck({ ...check, gender: e.target.value })}
              />{" "}
              Female
            </label>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
