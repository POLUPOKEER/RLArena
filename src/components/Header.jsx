import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Popconfirm, message } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('currentUser'));

  const menuItems = {
    Соревнования: "/competitions",
    Обучение: "/learning",
    FAQ: "/faq",
    Контакты: "/contact",
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('currentUser');
      message.success('Вы успешно вышли из системы');
      navigate('/Main');
    } catch (error) {
      console.error('Logout error:', error);
      message.error('Ошибка при выходе из системы');
    }
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
              ${isMenuOpen ? "rotate-45" : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-[#777e90] rounded transition-opacity duration-300 ease-in-out
              ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-[#777e90] rounded transition-transform duration-300 ease-in-out origin-left
              ${isMenuOpen ? "-rotate-45" : ''}`}
          ></span>
        </button>
        <div
          id="user"
          className="hidden md:block w-[40px] h-[40px] flex-shrink-0 bg-[#e6e8ec] rounded-full"
        >
          <div className="hidden md:block">
            {user ? (
              <Popconfirm
                title="Вы уверены, что хотите выйти?"
                onConfirm={handleLogout}
                okText="Да"
                cancelText="Нет"
                placement="bottomRight"
              >
                <div className="w-[40px] h-[40px] flex-shrink-0 bg-[#e6e8ec] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#d1d3d7] transition-colors">
                   <LogoutOutlined style={{ fontSize: '18px', color: '#777e90' }} />
                 </div>
              </Popconfirm>
            ) : (
              <Link to="/Login">
                <div className="w-[40px] h-[40px] flex-shrink-0 bg-[#e6e8ec] rounded-full flex items-center justify-center">
                  <UserOutlined style={{ fontSize: '18px', color: '#777e90' }} />
                </div>
              </Link>
            )}
          </div>

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

              {user ? (
                <Popconfirm
                  title="Вы уверены, что хотите выйти?"
                  onConfirm={handleLogout}
                  okText="Да"
                  cancelText="Нет"
                  placement="bottomLeft"
                >
                  <div className="px-4 py-3 hover:bg-gray-100 border-b border-[#e6e8ec] text-[#777e90] font-bold">
                    <span>Выйти</span>
                  </div>
                </Popconfirm>
              ) : (
                <Link to="/Login" 
                  className="px-4 py-3 hover:bg-gray-100 border-b border-[#e6e8ec] text-[#777e90] font-bold" 
                  onClick={() => setIsMenuOpen(false)}>
                  <span>Войти</span>
                </Link>
              )}
            </div>
          </motion.div>)}
      </AnimatePresence>
    </nav>
  );
};

export default Header;