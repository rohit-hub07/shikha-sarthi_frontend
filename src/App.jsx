import { Link, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
// import Home from './home/Home'
// import Upload from './pages/Upload'
// import './App.css'

import Footer from './components/Footer.jsx';
import NavBar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Health from './pages/Health.jsx';
import EPaper from './pages/EPaper.jsx';

function App() {
  return (
    // <div>
    //   <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
    //     <Link to="/" style={{ marginRight: 12 }}>Home</Link>
    //     <Link to="/upload">Upload</Link>
    //   </nav>

    //   <main style={{ padding: 12 }}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/upload" element={<Upload />} />
    //     </Routes>
    //   </main>
    // </div>
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/epaper" element={<EPaper />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>

      <Footer />
    </div>
  )
}

export default App
