/* eslint-disable no-use-before-define */
import { Link, Outlet } from 'react-router-dom'
import Title from '../components/Title/Title.tsx'

const MainLayout = (): JSX.Element => (
  <div className='
    flex flex-col
    items-center
    min-h-screen
    bg-gray-100
  '>
    <nav
      className='
        flex flex-row
        items-center justify-between
        w-full
        h-20
        bg-gray-100
        pr-8
        container
      '
    >
      <Title
        tag='h1'
        classnames='text-4xl font-bold text-primary-light'
        title='React SOLID principals'
      />
      <ul>
        <li><Link to='/'>List of Products</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>
)

export default MainLayout
