import React from "react";
import { useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

export default function Spinner() {
  let {isLoading} = useSelector((state)=>state.spinnerSlice)
  return isLoading? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <ScaleLoader height={80} width={20} color="#36d7b7" speedMultiplier={2}/>
    </div>
  ) : <></>
}
// react spinner npm
