import './App.css';
import Navigation from './Customer/Components/Navigations/Navigation.jsx';
// import { HomePage } from './Customer/Pages/HomePage';
import Footer from './Customer/Components/Footer/Footer';
// import Product from './Customer/Components/Products/Product.jsx';
// import ProductDetails from './Customer/Components/ProductDetails/ProductDetails.jsx';
import Cart from './Customer/Components/Cart/Cart.jsx';

function App() {
  return (
    <div className="">
      <Navigation/>
      {/* <div><HomePage /></div> */}
      {/* <div><Product/></div> */}
      {/* <div><ProductDetails/></div> */}
      <div><Cart/></div>
      <Footer/>
    </div>
  );
}

export default App;
