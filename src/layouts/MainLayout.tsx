/* eslint-disable no-use-before-define */
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout: React.FC = (): JSX.Element => (
  <>
    <nav>
      <ul>
        <li><Link to='/'>List of Products</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
)

export default MainLayout
