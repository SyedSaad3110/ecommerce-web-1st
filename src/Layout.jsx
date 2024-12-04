import React from 'react'
import { Outlet } from 'react-router'
import Nav from './components/Nav'

function Layout({search, setSearch, searchProduct}) {
  return (
    <>
    <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
    <Outlet/>
    </>
  )
}

export default Layout