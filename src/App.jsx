import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./lading/Landing";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isTopOfPage={isTopOfPage}/>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
