import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ShoppingCart, Info } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-gray-900 border-b-2 border-gray-700 sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl p-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <Link to="/" className='flex items-center gap-3'>
            <div className='text-4xl'>🎰</div>
            <div>
              <h1 className='text-2xl font-bold text-white tracking-tighter'>Lucky Draw</h1>
              <p className='text-sm text-gray-400'>0-9 тооны сугалаа</p>
            </div>
          </Link>
          
        
          
          <div className='flex gap-4'>
            <Link to="/" className='btn btn-ghost text-white'>
              <Home className='size-5'/>
              <span>Нүүр</span>
            </Link>
            <Link to="/purchase" className='btn btn-primary'>
              <ShoppingCart className='size-5'/>
              <span>Сугалаа авах</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar