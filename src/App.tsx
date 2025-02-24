import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import SideBar from './layouts/sidebar/SideBar';
import MainPage from './pages/main/MainPage';
import ProductPage from './pages/product/ProductPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
