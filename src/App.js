import './App.css';
import Navigation from './Customer/Components/Navigations/Navigation.jsx';
// import { HomePage } from './Customer/Pages/HomePage';
import Footer from './Customer/Components/Footer/Footer';
import Product from './Customer/Components/Products/Product.jsx';

function App() {
  return (
    <div className="">
      <Navigation/>
      {/* <div><HomePage /></div> */}
      <div><Product/></div>
      <Footer/>
    </div>
  );
}

export default App;
