import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Themes from './components/Themes';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {

  return (
<BrowserRouter>
<Navbar />
<Themes />
<Routes>
<Switch>
<Route index element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/portfolio' element={<Portfolio />} />
<Route path='/contact' element={<Contact />} />
</Switch>
</Routes>
</BrowserRouter>
);
}

export default App;
