const Header = () => {
  return (
    <header className="bg-[#222222] text-white flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Skill IQ</h1>
      <nav className="space-x-6">
        <button className="cursor-pointer border-2 border-white text-white font-semibold px-4 py-2 rounded-3xl hover:bg-[#3B3B3B]">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
