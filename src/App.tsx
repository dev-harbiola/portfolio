import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Portfolio />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
