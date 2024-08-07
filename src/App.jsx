import Navbar from "./components/Navbar"
import FindTransaction from "./views/FindTransaction"
import HomePage from "./views/HomePage"
import {  Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Navbar />
      
      <Routes >
        <Route path ="/" element ={<HomePage />}/>
        <Route path="/findtransaction" element={<FindTransaction />} />
        {/* <Route path="/sellstocks" element={<SellStockPage />} /> */}
        </Routes>
    </div>
  )
}

export default App
