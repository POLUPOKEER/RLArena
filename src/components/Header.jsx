import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ user = { name: "User", image: "/user_image.svg" } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    Соревнования: "/competitions",
    Обучение: "/learning",
    Форум: "/forum",
    FAQ: "/faq",
    Контакты: "/contact",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-row w-full h-[92px] bg-[#fcfcfd] items-center text-[#777e90] font-bold px-4 md:px-10 2xl:px-40 gap-8 justify-between border-b border-[#e6e8ec]">
      <div className="flex items-center gap-8 flex-shrink-0 ">
        <div id="logo" className="h-[52px] flex-shrink-0">
          <Link to="/Main">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-full h-full object-contain cursor-pointer "
            />
          </Link>
        </div>
      </div>

      {/* меню для dekstop */}
      <div id="menu" className="hidden md:flex flex-row gap-8 flex-1">
        {Object.keys(menuItems).map((item, index) => (
          <Link
            to={menuItems[item]}
            key={index}
            className="hover:text-black transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Бургер меню для mobile/ иконка пользователя для dekstop*/}
      <div>
        <button
          onClick={toggleMenu}
          className="relative w-5 h-4 flex flex-col justify-between items-center md:hidden z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-[#777e90] rounded transition-transform duration-300 ease-in-out origin-left
              ${isMenuOpen ? "rotate-45": ''}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-[#777e90] rounded transition-opacity duration-300 ease-in-out
              ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-[#777e90] rounded transition-transform duration-300 ease-in-out origin-left
              ${isMenuOpen ? "-rotate-45": ''}`}
          ></span>
        </button>
        <div
          id="user"
          className="hidden md:block w-[40px] h-[40px] flex-shrink-0 bg-[#e6e8ec] rounded-full"
        >
          <a href = '/Login'><img
            src={user.image}
            alt="User Image"
            className="w-full h-full object-contain"
          /></a>
        </div>
      </div>

      {/* анимированное меню для телефонов */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[92px] left-0 right-0 bg-[#fcfcfd] md:hidden z-50"
        >
          <div className="flex flex-col w-full border-t border-[#e6e8ec]">
            {Object.keys(menuItems).map((item, index) => (
              <Link
                to={menuItems[item]}
                key={index}
                className="px-4 py-3 hover:bg-gray-100 border-b border-[#e6e8ec]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 py-3 border-b border-[#e6e8ec] flex items-center flex-row gap-2">
              <div className="bg-[#e6e8ec] w-[40px] h-[40px] rounded-full overflow-hidden">
                <img src={user.image} alt="User" className="h-[40px] w-[40px] object-cover" />
              </div>
              <span>Привет, {user.name}!</span>
            </div>
          </div>
        </motion.div>)}
      </AnimatePresence>
    </nav>
  );
};

export default Header;