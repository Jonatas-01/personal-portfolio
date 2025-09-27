import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GetInTouch from "./pages/GetInTouch";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} / >
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
