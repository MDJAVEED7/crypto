
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import News from './News.jsx'
import Exchange from './Exchanges.jsx'
import Home from './Home.jsx'
import Cryptocurrencies from './Cryptocurrencies.jsx'
import Graph from './Graph.jsx'
const router=createHashRouter(
  [
    {
      path:"/",
      element:<div>
        <NavBar></NavBar>
        <div>
          <Home></Home>
        </div>
        <div className='flex justify-center items-center'>
        <Footer></Footer>
     </div>
      </div>
    },
    {
      path:"/Graph",
      element:<div>
        
        <div>
          <Graph></Graph>
        </div>
        <div className='flex justify-center items-center'>
        <Footer></Footer>
     </div>
      </div>
    },
    {
      path:"/Cryptocurrencies",
      element:<div>
        <NavBar></NavBar>
     <div>
       <Cryptocurrencies></Cryptocurrencies>
     </div>
     <div className='flex justify-center items-center'>
     <Footer></Footer>
     </div>
      </div>
    },
    {
      path:"/Exchange",
      element:<div>
        <NavBar></NavBar>
     <div>
       <Exchange></Exchange>
     </div>
     <div className='flex justify-center items-center'>
     <Footer></Footer>
     </div>
      </div>
    },
    {
      path:"/News",
      element:<div>
        <NavBar></NavBar>
        <div>
          <News></News>
        </div>
        <Footer></Footer>
      </div>
    }
  ]
)
function App() {
  return (
    <>

     <div>
      <RouterProvider router={router}></RouterProvider>
     </div>
    </>
  )
}

export default App
