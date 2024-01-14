import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
