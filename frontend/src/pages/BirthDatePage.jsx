import React, { useState } from 'react';
import { Sparkles, Moon, Star, Heart, Briefcase, Calendar } from 'lucide-react';


const BirthDatePage = ({ user, onSubmit }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = () => {
    if (birthDate) {
      onSubmit(birthDate);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar user={user} />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl">
          <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Төрсөн өдрөө оруулна уу
          </h2>
          <div>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:border-purple-600 focus:outline-none text-lg mb-6"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
