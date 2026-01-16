const TopicsPage = ({ user, onTopicSelect }) => {
  const topics = [
    { id: 'general', icon: Sparkles, title: 'Ерөнхий Tarot', desc: 'Амьдралын ерөнхий чиглэл болон удирдамж' },
    { id: '2026', icon: Star, title: '2026 оны Tarot', desc: 'Энэ жилийн таны хувь заяа' },
    { id: 'love', icon: Heart, title: 'Хайр Дурлал', desc: 'Таны хайрын харилцааны талаар' },
    { id: 'career', icon: Briefcase, title: 'Карьер', desc: 'Ажил мэргэжлийн хөгжил' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar user={user} />
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Сэдвээ сонгоно уу
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {topics.map(topic => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => onTopicSelect(topic.id)}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-all"
              >
                <Icon className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">{topic.title}</h3>
                <p className="text-gray-600 text-center">{topic.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
