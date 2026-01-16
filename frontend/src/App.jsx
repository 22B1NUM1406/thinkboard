import React, { useState } from 'react';
import { Sparkles, Moon, Star, Heart, Briefcase, Calendar } from 'lucide-react';

// ============================================
// COMPONENT - NewsSection.jsx
// ============================================
const NewsSection = () => {
  const newsList = [
    {
      id: 1,
      title: '2026 оны Таротын урьдчилсан мэдээ',
      excerpt: 'Энэ жил танд ямар өөрчлөлтүүд хүлээгдэж байна вэ? Таротын мэргэжилтнүүдийн урьдчилсан мэдээ...',
      date: '2026-01-17',
      category: 'Урьдчилсан мэдээ',
      icon: '🔮'
    },
    {
      id: 2,
      title: 'Шинэ сарны Tarot мэргэ',
      excerpt: 'Шинэ сарны үед Tarot уншлага хэрхэн хийх талаар мэдээлэл...',
      date: '2026-01-16',
      category: 'Зөвлөгөө',
      icon: '🌙'
    },
    {
      id: 3,
      title: 'Та өнөөдөр ямар хөзөр таарах вэ?',
      excerpt: 'Өдөр тутмын Tarot картын мэдээ - таны өнөөдрийн хөзөр...',
      date: '2026-01-17',
      category: 'Өдрийн мэдээ',
      icon: '⭐'
    }
  ];

  return (
    <div id="news" className="container mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Сүүлийн үеийн мэдээ
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Таротын ертөнцийн шинэ мэдээ мэдээлэл
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {newsList.map(news => (
          <div key={news.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden border-t-4 border-purple-600">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{news.icon}</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {news.category}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{news.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.excerpt}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition">
                Унших →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// COMPONENT - BlogSection.jsx
// ============================================
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Таротын түүх ба уламжлал',
      excerpt: 'Tarot хөзөр хэрхэн бий болж, өнөөдөр хүртэл хэрхэн хөгжсөн тухай...',
      date: '2026-01-15',
      image: '📜'
    },
    {
      id: 2,
      title: '3 хөзрийн тархалт гэж юу вэ?',
      excerpt: 'Өнгөрсөн-Одоо-Ирээдүй тархалтын талаар дэлгэрэнгүй мэдээлэл...',
      date: '2026-01-10',
      image: '🔮'
    },
    {
      id: 3,
      title: 'Major Arcana vs Minor Arcana',
      excerpt: 'Хоёр төрлийн таротын хөзрийн ялгаа, утга учир...',
      date: '2026-01-05',
      image: '🎴'
    }
  ];

  return (
    <div id="blog" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Таротын Блог
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Таротын ертөнцийн талаар илүү ихийг мэдээрэй
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-800 h-48 flex items-center justify-center text-6xl">
              {post.image}
            </div>
            <div className="p-6">
              <div className="text-sm text-purple-600 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition">
                Дэлгэрэнгүй унших →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// DATA - tarotData.js
// ============================================
const tarotCards = [
  { id: 0, name: 'The Fool', mongolian: 'Тэнэг', meaning: 'Шинэ эхлэл, боломж, итгэл' },
  { id: 1, name: 'The Magician', mongolian: 'Илбэчин', meaning: 'Манифестаци, хүч чадал, шилжилт' },
  { id: 2, name: 'The High Priestess', mongolian: 'Тахилч эм', meaning: 'Зөн совин, нууц мэдлэг, дотоод мэдрэмж' },
  { id: 3, name: 'The Empress', mongolian: 'Хатан хаан', meaning: 'Үржил шим, бүтээлч байдал, байгаль' },
  { id: 4, name: 'The Emperor', mongolian: 'Эзэн хаан', meaning: 'Эрх мэдэл, бүтэц, удирдлага' },
  { id: 5, name: 'The Hierophant', mongolian: 'Лам', meaning: 'Уламжлал, сургамж, зөвлөгөө' },
  { id: 6, name: 'The Lovers', mongolian: 'Хайрлагчид', meaning: 'Хайр, харилцаа, сонголт' },
  { id: 7, name: 'The Chariot', mongolian: 'Тэрэг', meaning: 'Хяналт, амжилт, зорилго' },
  { id: 8, name: 'Strength', mongolian: 'Хүч', meaning: 'Хүч чадал, зоригт байдал, тэвчээр' },
  { id: 9, name: 'The Hermit', mongolian: 'Ганцаарчин', meaning: 'Дотогшоо харалт, мэргэн ухаан' },
  { id: 10, name: 'Wheel of Fortune', mongolian: 'Азын хүрд', meaning: 'Азын эргэлт, өөрчлөлт' },
  { id: 11, name: 'Justice', mongolian: 'Шударга ёс', meaning: 'Шударга ёс, үнэн, хариуцлага' },
  { id: 12, name: 'The Hanged Man', mongolian: 'Дүүжлэгдсэн', meaning: 'Өөр өнцгөөс харах' },
  { id: 13, name: 'Death', mongolian: 'Үхэл', meaning: 'Өөрчлөлт, төгсгөл, шинэчлэгдэх' },
  { id: 14, name: 'Temperance', mongolian: 'Даруу байдал', meaning: 'Тэнцвэр, зохицуулалт' },
  { id: 15, name: 'The Devil', mongolian: 'Чөтгөр', meaning: 'Хязгаарлалт, хараат байдал' },
  { id: 16, name: 'The Tower', mongolian: 'Цамхаг', meaning: 'Гэнэтийн өөрчлөлт, устгал' },
  { id: 17, name: 'The Star', mongolian: 'Од', meaning: 'Найдвар, урам зориг' },
  { id: 18, name: 'The Moon', mongolian: 'Сар', meaning: 'Сэтгэл санаа, айдас, төөрөгдөл' },
  { id: 19, name: 'The Sun', mongolian: 'Нар', meaning: 'Баяр баясгалан, амжилт' },
  { id: 20, name: 'Judgement', mongolian: 'Шүүлт', meaning: 'Дахин төрөлт, дуудлага' },
  { id: 21, name: 'The World', mongolian: 'Дэлхий', meaning: 'Дуусгал, бүрэн байдал, амжилт' }
];

// ============================================
// COMPONENT - Navbar.jsx
// ============================================
const Navbar = ({ user }) => (
  <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Moon className="w-8 h-8" />
          <span className="text-2xl font-bold">Таротын Мэргэ</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-purple-300 transition">Нүүр</a>
          <a href="#" className="hover:text-purple-300 transition">Тухай</a>
          <a href="#" className="hover:text-purple-300 transition">Мэдээ</a>
          <a href="#" className="hover:text-purple-300 transition">Блог</a>
          <a href="#" className="hover:text-purple-300 transition">Холбоо барих</a>
          {user && (
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-2xl">{user.avatar}</span>
              <span className="font-medium">{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
);

// ============================================
// COMPONENT - Footer.jsx
// ============================================
const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 mt-16">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">Холбоо барих</h3>
      <p className="mb-2">И-мэйл: info@tarot.mn</p>
      <p className="mb-2">Утас: +976 9999-9999</p>
      <p className="text-purple-300 mt-6">© 2026 Таротын Мэргэ. Бүх эрх хуулиар хамгаалагдсан.</p>
    </div>
  </footer>
);

// ============================================
// PAGE - HomePage.jsx
// ============================================
const HomePage = ({ user, onLogin }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
    <Navbar user={user} />
    
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">
          Таротын Мэргэ Авах
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Таны ирээдүйг нээж, удирдамж өгөх мэргэжлийн Tarot уншлага
        </p>
        
        {!user && (
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook-аар нэвтрэх
          </button>
        )}
      </div>
    </div>

    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Tarot гэж юу вэ?</h3>
          <p className="text-gray-600">
            Tarot бол 78 хөзрөөс бүрдсэн эртний зөгнөлийн систем юм. Энэ нь таны өнгөрсөн, одоо болон ирээдүйн талаар гүнзгий ойлголт өгдөг.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <Star className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Юуг хэлж өгдөг вэ?</h3>
          <p className="text-gray-600">
            Таротын хөзөр нь таны амьдралын янз бүрийн тал - хайр дурлал, карьер, санхүү, хувийн өсөлт зэрэгт удирдамж өгдөг.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <Moon className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Хэрхэн ажилладаг вэ?</h3>
          <p className="text-gray-600">
            Та 3 хөзөр сонгоно. Эдгээр нь өнгөрсөн, одоо, ирээдүйг илэрхийлж, таны асуудалд тодорхой хариулт өгнө.
          </p>
        </div>
      </div>
    </div>

    <NewsSection />
    <BlogSection />
    <Footer />
  </div>
);

// ============================================
// PAGE - BirthDatePage.jsx
// ============================================
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

// ============================================
// PAGE - TopicsPage.jsx
// ============================================
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

// ============================================
// PAGE - TarotPage.jsx
// ============================================
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

// ============================================
// PAGE - ResultPage.jsx
// ============================================
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

// ============================================
// MAIN APP - App.jsx
// ============================================
const App = () => {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [birthDate, setBirthDate] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);

  const handleLogin = () => {
    const demoUser = {
      name: 'Батбаяр Доржхан',
      avatar: '👤'
    };
    setUser(demoUser);
    setPage('birthdate');
  };

  const handleBirthDateSubmit = (date) => {
    setBirthDate(date);
    setPage('topics');
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setPage('tarot');
  };

  const handleCardsSelected = (cards) => {
    setSelectedCards(cards);
    setPage('result');
  };

  const handleReset = () => {
    setSelectedCards([]);
    setPage('topics');
  };

  return (
    <>
      {page === 'home' && <HomePage user={user} onLogin={handleLogin} />}
      {page === 'birthdate' && <BirthDatePage user={user} onSubmit={handleBirthDateSubmit} />}
      {page === 'topics' && <TopicsPage user={user} onTopicSelect={handleTopicSelect} />}
      {page === 'tarot' && <TarotPage user={user} selectedTopic={selectedTopic} onCardsSelected={handleCardsSelected} />}
      {page === 'result' && <ResultPage user={user} selectedCards={selectedCards} onReset={handleReset} />}
    </>
  );
};

export default App;