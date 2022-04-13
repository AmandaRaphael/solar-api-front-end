
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Satellites from "./components/satellite/Satellites.js";
import Planets from "./components/planets/Planets";
import Homepage from "./pages/Homepage/Homepage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/satellites" element={<Satellites />} />
          <Route path="/planets" element={<Planets />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
