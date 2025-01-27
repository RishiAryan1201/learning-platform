import Home from "./pages/Home";
import Registration_Form from "./pages/Registration_Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/registration" exact element={<Registration_Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
