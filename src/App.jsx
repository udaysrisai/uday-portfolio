import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeModal from "./components/ResumeModal";
import "./styles/globals.css";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {/* Ambient background blobs */}
      <div className="ambient">
        <div className="ambient-blob ambient-blob-1" />
        <div className="ambient-blob ambient-blob-2" />
        <div className="ambient-blob ambient-blob-3" />
      </div>

      <Navbar onViewResume={() => setResumeOpen(true)} />
      <Home onViewResume={() => setResumeOpen(true)} />
      <Footer />

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
