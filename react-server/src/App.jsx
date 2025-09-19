import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { useState } from "react";
function App() {
  const [user] = useState("theeraphat phatjinda");

  return (
    <div className="bg-gradient-to-br from-black to-violet-950 min-h-screen w-full">
      <BrowserRouter>
        <nav className="bg-violet-950 shadow-lg sticky top-0 z-20">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
            <div className="flex gap-4">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-lg transition-colors duration-200 font-semibold text-white hover:bg-violet-800 hover:text-yellow-300 "
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="px-4 py-2 rounded-lg transition-colors duration-200 font-semibold text-white hover:bg-violet-800 hover:text-yellow-300 "
              >
                About
              </NavLink>
              <NavLink
                to="/content"
                className="px-4 py-2 rounded-lg transition-colors duration-200 font-semibold text-white hover:bg-violet-800 hover:text-yellow-300 "
              >
                Content
              </NavLink>
            </div>
            <div className="text-sm text-gray-300 italic">{user}</div>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto mt-10 p-8 text-white text-3xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
