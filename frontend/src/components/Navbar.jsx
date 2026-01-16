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
