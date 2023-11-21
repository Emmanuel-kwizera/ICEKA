import Home from "../pages/Home";
import Team from "../pages/Team";
import Challenges from "../pages/Challenges";
import Solution from "../pages/Solution";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="*" element={<h1>---Not Found--</h1>} />
      </Routes>
    </div>
  );
};

export default App;
