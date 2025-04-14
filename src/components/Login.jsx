import { useState } from 'react';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = (e) => {
    e.preventDefault();
    // Добавьте логику для регистрации
  };

  return (
    <div className="min-h-screen flex justify-center">
      {/* Левая часть */}
      <div className="hidden md:flex w-1/2 bg-blue-100 flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Добро пожаловать в</h1>
        <h1 className="text-2xl font-bold mb-4 text-blue-500">RLArena!</h1>
        <img
          src="/Group 349.svg"
          alt="Welcome Illustration"
          className="w-84 h-84"
        />
      </div>

      {/* Правая часть */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm px-8">
          <h2 className="text-2xl font-semibold mb-4 text-left">С возвращением!</h2>

          <form onSubmit={handleRegistration}>
            

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                Электронная почта
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="email"
                id="email"
                placeholder="Введите ваш e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                Пароль
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="password"
                id="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                 <button className="text-xs text-gray-400 mt-1 text-right w-full">Забыли пароль</button>
   
            </div>


            <button
              type="submit"
              className="w-full bg-[#2B73B1] text-white py-2 rounded-full"
            >
              Авторизироваться
            </button>
          </form>

          <div className="mt-6 text-gray-600">
            Уже есть аккаунт?{' '}
            <a href="/Registration" className="text-blue-600">Зарегистрироваться</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
