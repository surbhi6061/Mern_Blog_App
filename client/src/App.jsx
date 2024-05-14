import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;