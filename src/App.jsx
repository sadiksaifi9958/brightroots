import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../src/pages/Home";
import Quiz from "../src/pages/Quiz";
import Result from "../src/pages/Result";
import Subjects from "../src/pages/Subjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="quiz/:subjects" element={<Quiz />} />
          <Route path="Result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
