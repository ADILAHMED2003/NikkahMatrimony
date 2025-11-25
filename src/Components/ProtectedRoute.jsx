import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { login } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { store } from "../redux/store";

const ProtectedRoute = () => {

 
useEffect(() => {
  console.log("Updated user:", store.getState().user.data);
}, []);
  return store.getState().user.data ? <Outlet /> : <Navigate to="/register" replace />;
};

export default ProtectedRoute;
