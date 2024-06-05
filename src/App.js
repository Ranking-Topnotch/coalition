import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Layout from './Layout'

const App = () => {
  const pages = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home />} />
    </Route>
  )) 

  return (
    <div className='app'>
      <RouterProvider router={pages}/>
    </div>
  )
}

export default App
