import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BlogExpand from "./components/BlogExpand";

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Form />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
