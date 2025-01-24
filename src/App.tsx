import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
