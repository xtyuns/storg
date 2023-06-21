import "./App.css";
import { Container } from "@mui/material";
import DiskIndex from "./pages/DiskIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileManager from "./pages/FileManager";


export default function App() {
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DiskIndex} />
          <Route path="/files" Component={FileManager} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
