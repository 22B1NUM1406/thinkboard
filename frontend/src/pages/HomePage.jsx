const HomePage = ({ user, onLogin }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
    <Navbar user={user} />
    
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">
          Таротын Мэргэ Авах
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Таны ирээдүйг нээж, удирдамж өгөх мэргэжлийн Tarot 
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
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Юуг хэлж өгч чадах вэ?</h3>
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

    <Footer />
  </div>
);
