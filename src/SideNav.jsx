import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col py-5 h-full bg-slate-600 justify-between">
        <div className="sections flex flex-col">
          <Link to="/">Active Tasks</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/completedtasks">Completed Tasks</Link>
          <Link to="/deletedtasks">Deleted Tasks</Link>
        </div>
        <div className="sidenav-footer">
          <div
            className="logout cursor-pointer"
            onClick={() => {
              dispatch({
                type: "adminAccess",
                payload: { emailId: "", pass: "" },
              });
              console.log("logout");
            }}
          >
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
