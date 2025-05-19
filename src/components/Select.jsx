import { useState } from "react";
import Footer from "../components/Footer";
import Select from "../components/Select";

const options = [
  { value: "billing", label: "Биллинг" },
  { value: "technical", label: "Техническая поддержка" },
  { value: "general", label: "Общие вопросы" },
];

const ContactPage = () => {
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = () => {
    console.log(selected, name, email, description);
  };

  return (
    <div>
      <div className="d-flex min-w-5xl border py-40">
        <div className="px-4 md:px-8 lg:px-16 xl:px-[260px] flex justify-between md:gap-8">
          <div className="w-full flex flex-col gap-5 md:w-[50%]">
            <h2 className="text-3xl text-[#363940] font-bold">
              Связаться с нами
            </h2>
            <p className="text-xl text-[#95A1BB]">
              Оставьте ваши данные и мы обязательно с вами свяжемся!
            </p>
            <Select
              value={selected}
              options={options}
              handleChange={handleSelect}
            />
            <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-3">
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="name"
                placeholder="Ваше ФИО"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              id="description"
              placeholder="Опишите вашу проблему"
              value={description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition"
            >
              Отправить запрос
            </button>
          </div>
          <div className="hidden md:block md:w-[50%]">
            <img src="contacts-img.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
