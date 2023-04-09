import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import AllCocktail from './components/AllCocktail/AllCocktail'
import Blogs from './components/Blogs/Blogs'
import SinglaCocktail from './components/SinglaCocktail/SinglaCocktail'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout></Layout>,
    children : [
      {
        path :'/',
        element : <Home></Home>,
      },
      {
        path :'/cocktails',
        element : <AllCocktail></AllCocktail>,
        loader : ()=> fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      },
      {
        path :'/cocktail/:cocktailId',
        element : <SinglaCocktail></SinglaCocktail>,
        loader : ({params})=> fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
      },
      {
        path :'/about',
        element : <About></About>,
      },
      {
        path :'/blogs',
        element : <Blogs></Blogs>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
