import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
