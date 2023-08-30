import React from 'react'
import {Route, Routes} from "react-router-dom"
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"

import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
import Ipad from './Pages/Ipad/Ipad';
import Iphone from './Pages/Iphone/Iphone';
import Mac from './Pages/Mac/Mac';
import Music from './Pages/Music/Music';
import Support from './Pages/Support/Support';
import Tv from './Pages/Tv/Tv';
import Watch from './Pages/Watch/Watch';
import Shared from './Pages/Main/Shared/Shared';
import Products from './Pages/Iphone/Products';
import FourOFour from './Pages/FourOFour/FourOFour';
import Search from './Pages/Search/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shared/>}>
        <Route path="/" element={<Main/>} />
        <Route path="mac" element={<Mac/>} />
        <Route path="iphone" element={<Iphone/>} />
        <Route path="iphone/:productID" element={<Products/>} />
        <Route path="ipad" element={<Ipad/>} />
        <Route path="watch" element={<Watch/>} />
        <Route path="tv" element={<Tv/>} />
        <Route path="music" element={<Music/>} />
        <Route path="support" element={<Support/>} />
        <Route path="search" element={<Search/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<FourOFour/>} />
        </Route> 
      </Routes>
    </div>
  )
}

export default App





