import React, { Suspense } from 'react'
import { ToastContainer, toast } from 'react-toastify'
//components
import { FallbackLoading } from './components'
//pages
const EasyGraphPage = React.lazy(() => import('./pages/EasyGraphPage'))

const App = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <EasyGraphPage />
      <ToastContainer />
    </Suspense>
  )
}

export default App
