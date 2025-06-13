import { useRef, useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../helpers/users-api";

const Registration = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const fileRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setPhoto(file);
      setPhotoUrl(URL.createObjectURL(file));
    } else {
      setPhoto(null);
      setPhotoUrl(null);
      fileRef.current.value = "";
    }
  };

  const handleRemove = () => {
    setPhoto(null);
    setPhotoUrl(null);
    fileRef.current.value = "";
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Валидация полей
    if (!name || !email || !password) {
      message.error("Пожалуйста, заполните все поля");
      return;
    }

    if (password.length < 8) {
      message.error("Пароль должен содержать минимум 8 символов");
      return;
    }

    if (!isAgreed) {
      message.error("Необходимо согласиться с условиями");
      return;
    }

    try {
      const { access_token } = await register({
        profile_image: photo,
        username: name,
        email,
        password,
      });

      localStorage.setItem("token", access_token);

      setName("");
      setEmail("");
      setPassword("");
      setIsAgreed(false);

      navigate("/Main");
    } catch (error) {}
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
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm px-8">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Создайте свой аккаунт
          </h2>
          <p className="mb-6 text-lg text-gray-500 text-left">
            Это просто и легко
          </p>

          <form onSubmit={handleRegistration}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="photo"
              >
                Фото
              </label>
              <input
                onChange={handleFileChange}
                ref={fileRef}
                className="hidden w-full px-3 py-2 border rounded-lg"
                type="file"
                id="photo"
                placeholder="Введите ваше имя"
              />
              {photo ? (
                <div className="relative inline-block">
                  <img
                    src={photoUrl}
                    alt="preview"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={handleRemove}
                    className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-400 transition"
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current.click()}
                  className="flex items-center justify-center w-32 h-32 border-2 border-dashed text-gray-600 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition"
                >
                  Выбрать фото
                </button>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="name"
              >
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
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="email"
              >
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
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="password"
              >
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
              <p className="text-sm text-gray-500 mt-1">
                Должен быть больше 8 элементов
              </p>
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
                  Создание учетной записи означает, что вы соглашаетесь с{" "}
                  <a href="#" className="text-blue-600">
                    Правилами и условиями
                  </a>
                  , а также с нашей{" "}
                  <a href="#" className="text-blue-600">
                    Политикой конфиденциальности
                  </a>
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
            Уже есть аккаунт?{" "}
            <a href="/Login" className="text-blue-600">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
