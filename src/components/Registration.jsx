import { useState } from 'react';


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

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
          <h2 className="text-2xl font-semibold mb-4 text-left">Создайте свой аккаунт</h2>
          <p className="mb-6 text-lg text-gray-500 text-left">Это просто и легко</p>

          <form onSubmit={handleRegistration}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                ФИО
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              <p className="text-sm text-gray-500 mt-1">Должен быть больше 8 элементов</p>
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  Создание учетной записи означает, что вы соглашаетесь с{' '}
                  <a href="#" className="text-blue-600">Правилами и условиями</a>, а также с нашей{' '}
                  <a href="#" className="text-blue-600">Политикой конфиденциальности</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B73B1] text-white py-2 rounded-full"
            >
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-6 text-gray-600">
            Уже есть аккаунт?{' '}
            <a href="/Login" className="text-blue-600">Войти</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
