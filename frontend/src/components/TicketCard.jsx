import React, { useState } from 'react'
import { Gift, Ticket as TicketIcon, Eye } from 'lucide-react'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const TicketCard = ({ ticket, setTickets }) => {
    const [isOpening, setIsOpening] = useState(false)
    
    const handleOpenTicket = async () => {
        setIsOpening(true)
        
        try {
            const response = await api.post(`/tickets/open/${ticket.ticketId}`)
            const { isWinner, prizeAmount, number } = response.data
            
            if (isWinner) {
                toast.success(`🎉 Баяр хүргэе! ${number} тооноос ${prizeAmount}₮ хожлоо!`, {
                    duration: 5000,
                    icon: '🎁'
                })
            } else {
                toast.error(`❌ ${number} тоо хожоогүй`, {
                    duration: 3000
                })
            }
            
            // Шинэчилсэн мэдээлэл
            setTickets(prev => prev.map(t => 
                t._id === ticket._id ? { 
                    ...t, 
                    ...response.data.ticket, 
                    isOpened: true 
                } : t
            ))
            
        } catch (error) {
            console.error("Сугалаа нээх алдаа:", error)
            toast.error("Сугалаа нээхэд алдаа гарлаа")
        } finally {
            setIsOpening(false)
        }
    }
    
    // Тооны өнгө тодорхойлох
    const getNumberColor = (number) => {
        const colors = {
            0: 'bg-gray-700 text-gray-300',
            1: 'bg-blue-900 text-blue-200',
            2: 'bg-green-900 text-green-200',
            3: 'bg-yellow-900 text-yellow-200',
            4: 'bg-orange-900 text-orange-200',
            5: 'bg-red-900 text-red-200',
            6: 'bg-purple-900 text-purple-200',
            7: 'bg-pink-900 text-pink-200',
            8: 'bg-indigo-900 text-indigo-200',
            9: 'bg-teal-900 text-teal-200'
        }
        return colors[number] || 'bg-gray-800 text-white'
    }
    
    // Тооны нэр
    const getNumberName = (number) => {
        const names = {
            0: 'ТЭГ',
            1: 'НЭГ',
            2: 'ХОЁР', 
            3: 'ГУРАВ',
            4: 'ДӨРӨВ',
            5: 'ТАВ',
            6: 'ЗУРГАА',
            7: 'ДОЛОО',
            8: 'НАЙМ',
            9: 'ЕС'
        }
        return names[number] || number
    }
    
    return (
        <div className={`card ${ticket.isWinner ? 'bg-gradient-to-br from-yellow-900 to-orange-900' : 'bg-gray-800'} 
            border-2 ${ticket.isWinner ? 'border-yellow-500' : 'border-gray-700'} 
            hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className='card-body p-6'>
                <div className='flex items-center justify-between mb-4'>
                    <TicketIcon className={`size-8 ${ticket.isWinner ? 'text-yellow-400' : 'text-gray-400'}`} />
                    {ticket.isOpened && ticket.isWinner && (
                        <div className='badge badge-success badge-lg gap-2 animate-pulse'>
                            <Gift className='size-4' />
                            ХОЛСОН
                        </div>
                    )}
                </div>
                
                <h3 className='card-title text-white text-lg font-mono break-all mb-2'>
                    {ticket.ticketId}
                </h3>
                
                {/* ТООНЫ ХЭСЭГ */}
                <div className='flex flex-col items-center justify-center my-4'>
                    {ticket.isOpened ? (
                        <>
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center 
                                ${getNumberColor(ticket.number)} border-4 
                                ${ticket.isWinner ? 'border-yellow-500' : 'border-gray-600'} 
                                shadow-2xl mb-3`}>
                                <span className='text-4xl font-bold'>{ticket.number}</span>
                            </div>
                            <p className='text-lg font-bold mb-1'>{getNumberName(ticket.number)}</p>
                            
                            {ticket.isWinner ? (
                                <div className='text-center mt-4 p-3 bg-black bg-opacity-30 rounded-xl w-full'>
                                    <p className='text-yellow-300 text-sm mb-1'>Хожсон хонжоо</p>
                                    <p className='text-3xl font-bold text-yellow-400 animate-pulse'>
                                        {ticket.prizeAmount}₮
                                    </p>
                                </div>
                            ) : (
                                <div className='text-center mt-4 p-3 bg-black bg-opacity-30 rounded-xl w-full'>
                                    <p className='text-red-400 text-lg font-bold'>❌ ХОГОГҮЙ</p>
                                    <p className='text-gray-400 text-sm mt-1'>Дараагийн удаад азаа туршаарай</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {/* Нээгдээгүй үед */}
                            <div className='w-24 h-24 rounded-full flex items-center justify-center 
                                bg-gray-900 border-4 border-dashed border-gray-700 
                                shadow-2xl mb-3'>
                                <span className='text-4xl font-bold text-gray-600'>?</span>
                            </div>
                            <p className='text-gray-400 mb-4'>Тоо нуугдаж байна</p>
                            
                            <button 
                                className={`btn ${isOpening ? 'loading' : 'btn-primary'} 
                                    btn-lg gap-3 animate-pulse w-full`}
                                onClick={handleOpenTicket}
                                disabled={isOpening}
                            >
                                <Eye className='size-5' />
                                {isOpening ? 'Нээж байна...' : 'ТОО НЭЭХ'}
                            </button>
                        </>
                    )}
                </div>
                
                {/* Худалдаж авсан огноо */}
                <div className='mt-4 pt-3 border-t border-gray-700'>
                    <p className='text-sm text-gray-400 text-center'>
                        {new Date(ticket.purchaseTime).toLocaleDateString('mn-MN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TicketCard