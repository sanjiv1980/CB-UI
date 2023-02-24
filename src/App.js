import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick'
import Home from './components/Home'
import About from './components/About'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import FeaturedProduct from './components/FeaturedProduct'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/order-summary' element={<OrderSummary />}></Route>
            <Route path='/products' element={<Products />}>
                   <Route path='featured' element={<FeaturedProduct />}></Route>
                   <Route path='new' element={<NewProduct />}></Route>
            </Route>
            <Route path='*' element={<NoMatch />}></Route>
        </Routes>


        {/*<FunctionClick />*/}

       {/*
        <Message />
       */}

        {/*<Greet name = "kalindi singh">
            <p> I am sanjiv </p>
            <p> I am kundan </p>
        </Greet>
        <Welcome name = "Aarush singh">
            <button>Action</button>
        </Welcome>*/}
    </div>
  );

}

export default App;
