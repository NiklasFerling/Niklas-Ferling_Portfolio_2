import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="bg-neutral-900 bg-[url('/src/assets/bg.jpg')] bg-contain bg-top bg-no-repeat">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
