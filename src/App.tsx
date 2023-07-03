import {
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './routers/routers.tsx'

import { store } from './store/store.ts'

function AppRouter() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default AppRouter
