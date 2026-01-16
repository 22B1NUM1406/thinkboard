import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { CreditCard, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const PurchasePage = () => {
    const [amount, setAmount] = useState(800)
    const [isPurchasing, setIsPurchasing] = useState(false)
    const navigate = useNavigate()
    
    const handlePurchase = async () => {
        if (amount < 800) {
            toast.error('Хамгийн багадаа 800₮ оруулна уу')
            return
        }
        
        setIsPurchasing(true)
        try {
            const response = await api.post('/tickets/purchase', { amount })
            
            if (response.data.success) {
                toast.success(response.data.message)
                
                // Сугалааны ID-г local storage-д хадгалах
                const ticketIds = response.data.tickets.map(t => t.ticketId)
                const existingIds = JSON.parse(localStorage.getItem('lotteryTickets') || '[]')
                const allIds = [...ticketIds, ...existingIds].slice(0, 50) // Хамгийн их 50 хадгалах
                localStorage.setItem('lotteryTickets', JSON.stringify(allIds))
                
                // Нүүр хуудас руу буцах
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            }
        } catch (error) {
            console.error('Худалдан авах алдаа:', error)
            toast.error(error.response?.data?.message || 'Алдаа гарлаа')
        } finally {
            setIsPurchasing(false)
        }
    }
    
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800'>
            <Navbar />
            
            <div className='max-w-4xl mx-auto p-8'>
                <button 
                    onClick={() => navigate('/')}
                    className='btn btn-ghost text-white mb-6'
                >
                    <ArrowLeft className='size-5 mr-2' />
                    Буцах
                </button>
                
                <div className='card bg-gray-800 text-white shadow-2xl'>
                    <div className='card-body'>
                        <h2 className='card-title text-3xl flex items-center gap-3'>
                            <CreditCard className='size-8 text-green-400' />
                            Сугалаа худалдаж авах
                        </h2>
                        
                        <div className='divider'></div>
                        
                        <div className='space-y-8'>
                            <div className='flex items-center justify-between p-4 bg-gray-900 rounded-lg'>
                                <div>
                                    <h3 className='text-xl font-semibold'>Нэг сугалааны үнэ</h3>
                                    <p className='text-gray-400'>1 ширхэг сугалаа</p>
                                </div>
                                <span className='text-4xl font-bold text-green-400'>100₮</span>
                            </div>
                            
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text text-lg text-white'>Оруулах мөнгөн дүн</span>
                                </label>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <button 
                                            className='btn btn-circle btn-outline btn-lg border-white text-white'
                                            onClick={() => setAmount(prev => Math.max(800, prev - 100))}
                                        >
                                            -
                                        </button>
                                        <div className='relative'>
                                            <input 
                                                type='number' 
                                                className='input input-bordered w-40 text-center text-3xl font-bold bg-gray-900 text-white border-purple-500'
                                                value={amount}
                                                onChange={(e) => setAmount(Math.max(800, parseInt(e.target.value) || 800))}
                                                min='800'
                                                step='100'
                                            />
                                            <span className='absolute right-3 top-3 text-2xl'>₮</span>
                                        </div>
                                        <button 
                                            className='btn btn-circle btn-outline btn-lg border-white text-white'
                                            onClick={() => setAmount(prev => prev + 100)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                        {[800, 1000, 2000, 5000, 10000].map((amt) => (
                                            <button
                                                key={amt}
                                                className={`btn ${amount === amt ? 'btn-primary' : 'btn-outline btn-ghost'}`}
                                                onClick={() => setAmount(amt)}
                                            >
                                                {amt}₮
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='stats stats-vertical lg:stats-horizontal shadow bg-gray-900'>
                                <div className='stat'>
                                    <div className='stat-title text-gray-300'>Сугалааны тоо</div>
                                    <div className='stat-value text-3xl text-white'>{Math.floor(amount / 100)}</div>
                                    <div className='stat-desc text-gray-400'>ширхэг</div>
                                </div>
                                <div className='stat'>
                                    <div className='stat-title text-gray-300'>Нийт үнэ</div>
                                    <div className='stat-value text-3xl text-green-400'>{Math.floor(amount / 100) * 100}₮</div>
                                    <div className='stat-desc text-gray-400'>төлөх дүн</div>
                                </div>
                                <div className='stat'>
                                    <div className='stat-title text-gray-300'>Үлдэгдэл</div>
                                    <div className='stat-value text-3xl text-yellow-400'>{amount - (Math.floor(amount / 100) * 100)}₮</div>
                                    <div className='stat-desc text-gray-400'>буцах мөнгө</div>
                                </div>
                            </div>
                            
                            <div className='mb-8'>
  <h3 className='text-xl font-bold text-white mb-4'>Тоо бүрийн хожсон хонжоо</h3>
  <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
    {[
      { number: 0, amount: 0, color: 'bg-gray-800' },
      { number: 1, amount: 100, color: 'bg-blue-900' },
      { number: 2, amount: 200, color: 'bg-green-900' },
      { number: 3, amount: 300, color: 'bg-yellow-900' },
      { number: 4, amount: 500, color: 'bg-orange-900' },
      { number: 5, amount: 1000, color: 'bg-red-900' },
      { number: 6, amount: 2000, color: 'bg-purple-900' },
      { number: 7, amount: 5000, color: 'bg-pink-900' },
      { number: 8, amount: 10000, color: 'bg-indigo-900' },
      { number: 9, amount: 20000, color: 'bg-teal-900' }
    ].map((item) => (
      <div key={item.number} className={`${item.color} rounded-lg p-4 text-center border border-gray-700`}>
        <div className='text-2xl font-bold text-white mb-1'>{item.number}</div>
        <div className={`text-sm ${item.amount > 0 ? 'text-yellow-300' : 'text-gray-400'}`}>
          {item.amount > 0 ? `${item.amount}₮` : 'Хожоогүй'}
        </div>
      </div>
    ))}
  </div>
</div>
                            
                            <div className='card-actions justify-center'>
                                <button 
                                    className={`btn btn-primary btn-lg w-full max-w-md ${isPurchasing ? 'loading' : ''}`}
                                    onClick={handlePurchase}
                                    disabled={isPurchasing}
                                >
                                    {isPurchasing ? 'Төлбөр төлж байна...' : `Төлбөр төлөх (${amount}₮)`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchasePage