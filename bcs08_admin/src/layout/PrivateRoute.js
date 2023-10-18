import React from "react";
import { userLocalStorage } from "../api/localService";

export default function PrivateRoute({ children }) {
  let user = userLocalStorage.get();
  if (user?.maLoaiNguoiDung === "QuanTri") {
    return children;
    // HomeLayout is the children of PrivateRoute
  }
  // Optional Chaining (?.): The ?. operator is called optional chaining
  // If the user object exists and its maLoaiNguoiDung property is strictly equal to the string 'QuanTri', 
  // then execute the following code block
  window.location.href = "/login";
}

