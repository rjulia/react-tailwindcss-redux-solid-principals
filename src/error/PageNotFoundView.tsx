import { Link } from 'react-router-dom'

const PageNotFoundView = (): JSX.Element => (
  <div className='flex flex-col items-center justify-center mt-[300px]'>
    <h1 className='text-6xl font-bold'>404</h1>
    <p className='text-2xl font-semibold'>Page not found</p>
    <Link to='/' className='text-2xl font-semibold text-primary hover:text-blue-700'>Go back home</Link>
  </div>
)

export default PageNotFoundView
