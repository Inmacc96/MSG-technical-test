import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import FileUpload from "./pages/FileUpload/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fileUpload" element={<FileUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
