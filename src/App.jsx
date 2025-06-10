import "./App.css";
import Layout from "./pages/Layout";
import PhotoViewer from "./pages/PhotoViewer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/photoViewer" element={<PhotoViewer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
