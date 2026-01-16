import PurchasePage from './pages/PurchasePage'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </div>
  )
}

export default App
