import React, { Suspense } from 'react'
//components
import { FallbackLoading } from './components'
//pages
const EasyGraphPage = React.lazy(() => import('./pages/EasyGraphPage'))

const App = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <EasyGraphPage />
    </Suspense>
  )
}

export default App
