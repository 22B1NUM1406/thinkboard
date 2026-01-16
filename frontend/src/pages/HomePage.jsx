import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import TicketCard from '../components/TicketCard'
import { Ticket, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import api from '../lib/axios'

const HomePage = () => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalWon, setTotalWon] = useState(0)

  useEffect(() => {
    const savedTicketIds = JSON.parse(localStorage.getItem('lotteryTickets') || '[]')
    
    if (savedTicketIds.length > 0) {
      fetchTickets(savedTicketIds)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchTickets = async (ticketIds) => {
    try {
      const response = await api.post('/tickets/my-tickets', { ticketIds })
      const fetchedTickets = response.data.tickets
      setTickets(fetchedTickets)
      
      // Нийт хожсон дүнг тооцоолох
      const wonAmount = fetchedTickets
        .filter(t => t.isWinner && t.isOpened)
        .reduce((sum, ticket) => sum + ticket.prizeAmount, 0)
      setTotalWon(wonAmount)
      
    } catch (error) {
      console.error('Сугалаа авахад алдаа:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-black'>
      <Navbar />
      
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {/* Үндсэн мэдээлэл */}
        <div className='card bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900 text-white mb-8 shadow-2xl border border-gray-700'>
          <div className='card-body'>
            <h1 className='card-title text-3xl flex items-center gap-3'>
              <Trophy className='size-8 text-yellow-400' />
              Lucky Draw Сугалаа
            </h1>
            <p className='text-lg opacity-90'>Карт бүрт 0-9 хооронд тоо гарна</p>
            <div className='flex flex-wrap gap-4 mt-4'>
              <div className='badge badge-lg badge-info gap-2'>
                <span>1 → 100₮</span>
              </div>
              <div className='badge badge-lg badge-success gap-2'>
                <span>5 → 1000₮</span>
              </div>
              <div className='badge badge-lg badge-warning gap-2'>
                <span>8 → 10000₮</span>
              </div>
              <div className='badge badge-lg badge-error gap-2'>
                <span>9 → 20000₮</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Нийт хожсон мөнгө */}
        {totalWon > 0 && (
          <div className='card bg-gradient-to-r from-yellow-900 to-orange-900 text-white mb-8 shadow-2xl animate-pulse'>
            <div className='card-body text-center'>
              <h2 className='text-2xl font-bold mb-2'>🎉 Нийт хожсон хонжоо</h2>
              <p className='text-4xl font-bold'>{totalWon}₮</p>
            </div>
          </div>
        )}
        
        {loading ? (
          <div className='text-center py-12'>
            <div className='loading loading-spinner loading-lg text-primary'></div>
            <p className='mt-4 text-gray-300'>Сугалаанууд ачааллаж байна...</p>
          </div>
        ) : tickets.length === 0 ? (
          <div className='flex flex-col gap-8 text-center items-center justify-center py-12'>
            <div className='relative'>
              <Ticket className='size-32 text-gray-400 opacity-50' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-4xl font-bold text-gray-600'>?</span>
              </div>
            </div>
            <p className='text-2xl text-white font-bold'>Сугалааны тасалбар алга</p>
            <p className='text-gray-400 max-w-md'>Нэг сугалаа 100₮. 8 ширхэг сугалаа худалдаж авбал тоо гарна!</p>
            <Link to='/purchase' className='btn btn-primary font-bold btn-lg px-8 py-4 text-lg animate-bounce'>
              🎫 ОДОО СУГАЛАА АВАХ
            </Link>
          </div>
        ) : (
          <div>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-white'>Таны сүүлийн сугалаанууд</h2>
              <div className='text-gray-300'>
                Нийт: <span className='font-bold'>{tickets.length}</span> ширхэг
              </div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {tickets.slice(0, 8).map((ticket) => (
                <TicketCard key={ticket._id} ticket={ticket} setTickets={setTickets} />
              ))}
            </div>
            
            <div className='mt-12 text-center'>
              <Link to='/purchase' className='btn btn-primary btn-lg px-12'>
                🎰 ДАХИН СУГАЛАА АВАХ
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage