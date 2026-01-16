const ResultPage = ({ user, selectedCards, onReset }) => {
  const positions = ['Өнгөрсөн', 'Одоо', 'Ирээдүй'];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar user={user} />
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Таны Таротын Мэргэ
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {selectedCards.map((cardId, index) => {
            const card = tarotCards.find(c => c.id === cardId);
            return (
              <div key={cardId} className="bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center mb-4">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                    {positions[index]}
                  </span>
                </div>
                <div className="aspect-[2/3] bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg mb-4 flex items-center justify-center">
                  <Moon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2 text-center">
                  {card.mongolian}
                </h3>
                <p className="text-gray-700 text-center">{card.meaning}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onReset}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Дахин мэргэлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
