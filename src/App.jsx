import "./App.css";
import NavBar from "./NavBar";
import ActiveTasks from "../src/components/ActiveTasks";
import Analytics from "../src/components/Analytics";
import CompletedTasks from "../src/components/CompletedTasks";
import DeletedTasks from "../src/components/DeletedTasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./SideNav";
import { useEffect, useState } from "react";
import SignInOut from "./components/SignInUp";
import { useSelector } from "react-redux";
function App() {
  const [showHideSideNav, setShowHideSideNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const adminAccess = useSelector((state) => state.adminAccess);
  console.log(adminAccess);
  useEffect(() => {
    if (adminAccess.emailId === "admin" && adminAccess.pass === "123") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [adminAccess]);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? (
          <>
            <NavBar
              showHideSideNav={showHideSideNav}
              setShowHideSideNav={setShowHideSideNav}
            />
            <div className="flex flex-row w-full h-[90vh]">
              <div
                className={`${
                  !showHideSideNav
                    ? "w-[30%] absolute h-[90vh] left-[-30%]"
                    : "w-[30%] absolute h-[90vh]"
                } md:w-[15%] md:relative md:left-0`}
              >
                <SideNav />
              </div>

              <div className={`w-[100%] md:w-[85%]`}>
                <Routes>
                  <Route path="/" element={<ActiveTasks />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/completedtasks" element={<CompletedTasks />} />
                  <Route path="/deletedtasks" element={<DeletedTasks />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/*" element={<SignInOut />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
