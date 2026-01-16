const TarotPage = ({ user, selectedTopic, onCardsSelected }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (cardId) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardId)) {
      const newSelected = [...selectedCards, cardId];
      setSelectedCards(newSelected);
      setFlippedCards([...flippedCards, cardId]);
      
      if (newSelected.length === 3) {
        setTimeout(() => onCardsSelected(newSelected), 800);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar user={user} />
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          3 хөзөр сонгоно уу
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Сонгосон: {selectedCards.length}/3
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 max-w-7xl mx-auto">
          {tarotCards.map(card => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedCards.includes(card.id) ? 'opacity-50' : 'hover:scale-110'
              }`}
            >
              <div className={`relative aspect-[2/3] rounded-lg shadow-lg ${
                flippedCards.includes(card.id) ? 'animate-pulse' : ''
              }`}>
                {flippedCards.includes(card.id) ? (
                  <div className="w-full h-full bg-white rounded-lg p-2 flex flex-col items-center justify-center border-4 border-purple-400">
                    <div className="text-xs font-bold text-purple-900 text-center">{card.mongolian}</div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg flex items-center justify-center">
                    <Moon className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
