import './App.css'
import {Home} from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Repo } from './components/Repo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile title="Add User" />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* <Route path="/profile/:id/repo" element={<Repo />} /> */}
          <Route path="repo" element={<Repo />} />
          <Route path="*" element={<h1> page not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
