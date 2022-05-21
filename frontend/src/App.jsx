import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login/Login";
import FileUpload from "./pages/FileUpload/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/fileUpload" element={<FileUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
