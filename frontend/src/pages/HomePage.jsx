import Home from "../components/Home.jsx";
import CreateAccount from "../components/CreateAccount.jsx";
import Login from "../components/Login.jsx";
import { useState } from "react";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  let content;
  if (currentPage === "home") {
    content = <Home setCurrentPage={setCurrentPage} />;
  } else if (currentPage === "login") {
    content = <Login setCurrentPage={setCurrentPage} />;
  } else {
    content = <CreateAccount setCurrentPage={setCurrentPage} />;
  }
    return (
      content
  );
};

export default HomePage;
