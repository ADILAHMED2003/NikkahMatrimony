// import React, { useState, useEffect } from "react";
// import "./app.css";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useSelector, useDispatch } from "react-redux";
// import { showNotify, hideNotify } from "./redux/slices/notifySlice";

export default function App() {
  const notify = useSelector((store) => store.notify);
  console.log(notify);
  const dispatch = useDispatch();

//   const [check, setCheck] = useState({
//     email: "",
//     password: "",
//     age: "",
//     gender: "",
//   });

//   // 🔔 Trigger toast dynamically
//   useEffect(() => {
//     if (notify.visible) {
//       if (notify.type === "success") toast.success(notify.message);
//       else if (notify.type === "error") toast.error(notify.message);
//       else toast.info(notify.message);

//       dispatch(hideNotify());
//     }
//   }, [notify, dispatch]);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (!check.email || !check.password || !check.age || !check.gender) {
//       dispatch(
//         showNotify({
//           message: "Please fill all the fields!",
//           type: "error",
//         })
//       );
//     } else {
//       dispatch(
//         showNotify({
//           message: "Registration successful!",
//           type: "success",
//         })
//       );
//       setCheck({ email: "", password: "", age: "", gender: "" });
//     }
//   };

//   return (
//     <div className="parent">
//       <ToastContainer position="top-center" autoClose={2000} theme="colored" />

//       <div className="signup-container">
//         <h2>Sign Up</h2>
//         <form className="signup-form" onSubmit={handleRegister}>
//           <label>Email</label>
//           <input
//             type="email"
//             value={check.email}
//             onChange={(e) => setCheck({ ...check, email: e.target.value })}
//             placeholder="Enter your email"
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             value={check.password}
//             onChange={(e) => setCheck({ ...check, password: e.target.value })}
//             placeholder="Enter your password"
//           />

//           <label>Age</label>
//           <input
//             type="number"
//             value={check.age}
//             onChange={(e) => setCheck({ ...check, age: e.target.value })}
//             placeholder="Enter your age"
//           />

//           <label>Gender</label>
//           <div className="gender">
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={check.gender === "male"}
//                 onChange={(e) => setCheck({ ...check, gender: e.target.value })}
//               />{" "}
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={check.gender === "female"}
//                 onChange={(e) => setCheck({ ...check, gender: e.target.value })}
//               />{" "}
//               Female
//             </label>
//           </div>

//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home/Home";
// import About from "./Pages/Home/About";
// import Navbar from "./Pages/Home/Navbar";
// import Footer from "./Pages/Home/Footer";
// import HowItWorks from "./Pages/Home/HowItWorks";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import Profile from "./Pages/Profile/Profile";
// import Dashboard from "./Pages/Dashboard/Dashboard";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ProtectedRoute from "./Components/ProtectedRoute";


// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="/howitworks" element={<HowItWorks />} />

//         {/* Protected Routes - user must be logged in */}
//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;



// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import HowItWorks from "./Pages/Home/HowItWorks";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NikahForm from "./Pages/Detailform/DetailForm";
import Profile from "./pages/Profile/Profile";
import ProfileCards from "./Pages/Cards/ProfileCards";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

import ProtectedRoute from "./Components/ProtectedRoute";
import Notify from "./Components/Notify";


function App() {
  return (
    <>
      <Notify />
      <BrowserRouter>
        <Routes>

          {/* ✅ Protected parent */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detailsform" element={<NikahForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/userprofiles" element={<ProfileCards />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* ✅ Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;


