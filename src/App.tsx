import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bmw from './pages/Bmw';
import Footer from './components/Footer';
import Car1 from './components/cars/Car1';
import AboutUs from './pages/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/car/bmw" element={<Bmw />} />
          <Route path="/bmw/360" element={<Car1 />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
