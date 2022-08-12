import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "hooks/useEagerConnect";

const App: React.FC = () => {
  useEagerConnect();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <div className="App">
        <div className="banner"></div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
