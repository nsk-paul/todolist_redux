import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div>
        <header>
            <nav>
                <h1>Todo List</h1>
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="completed">Completed Page</NavLink>
                <NavLink to="uncompleted">Uncompleted Page</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>

    </div>

    
  )
}

export default RootLayout