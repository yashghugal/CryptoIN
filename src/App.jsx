import Navbar from "./Components/Navbar"
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Coin from './Pages/Coin.jsx'
import Footer from './Components/Footer.jsx'
import Layout from './Components/Layout.jsx'
import Pricing from "./Pages/Pricing.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Layout><Home/></Layout></>
    },
    {
      path:'/coin/:coinid',
      element: <><Layout><Coin/></Layout></>
    },
    {
      path:'/pricing',
      element: <><Layout><Pricing/></Layout></>
    }
  ])
  return (
    <>
      <div className=" bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800 ...">
        <RouterProvider router={router}/>
      </div>
      
    </>
  )
}

export default App
