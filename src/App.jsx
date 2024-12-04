import { useState } from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import { HomeProduct } from './Data';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  //  Add to cart
  const [cart , setCart] = useState([])
  const [shop , setShop] = useState(HomeProduct)
  // filter
  const Filter = (x)=>{
    const cateFilter = HomeProduct.filter((items)=>{
      return items.cat === x
    })
    setShop(cateFilter)
  }
  // all filter
  const AllFilter = ()=>{
    setShop(HomeProduct)
  }

//  search filter
  const [search  , setSearch] = useState('')
  // onclick search bar
  const searchProduct = ()=>{
    const searchFilter = HomeProduct.filter((x)=>{
      return x.cat === search
    })
    setShop(searchFilter)
  }
// 
// const searchLength = (search || []).length===0;
// const searchProduct = ()=>{
// if(searchLength){
//   alert('please search something!')
//   setShop(HomeProduct)
// }else{
//   const searchFilter = HomeProduct.filter((x)=>{
//     return x.cat === search
//   })
//   setShop(searchFilter)
// }

// add to cart

const addToCart = (product)=>{
  const exist = cart.find((x)=>{
    return x.id === product.id
  })
  if(exist){
    alert("this is alredy added")
  }else{
    setCart([...cart , { ...product , qty:1}])
   alert(" added to cart")
  }
}


  const router = createBrowserRouter([{
    path:"/",
    element:<Layout search={search} setSearch={setSearch} searchProduct={searchProduct}/>,
    children:[
      {
        path:"",
        element:(
              <>
             <Home addToCart={addToCart}/>
              </>
            ),
      },
      {
        path:"/shop",
        element:<Shop shop={shop} Filter={ Filter} AllFilter={AllFilter} addToCart={addToCart}/>
      },
      {
        path:'/cart',
        element:<Cart cart={cart} setCart={setCart}/>,
      },
      {
        path:'/contact',
        element:<Contact/>
      }
      
    ]

  }])

  return (
    <>
      <RouterProvider router={router}/>
      {/* <Nav/> */}
      
    </>
  )
}

export default App
