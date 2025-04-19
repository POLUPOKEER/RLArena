import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const Questions = {
  "Учетная запись": [
    {
      question: "Вопрос 1",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 2",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 3",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 4",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 5",
      answer: "Текст ответа.",
    },
  ],
  Соревнования: [
    {
      question: "Почему я не могу принять участие в конкурсе?",
      answer:
        "Перепроверьте крайний срок подачи заявок (на шапке соревнования), так как он мог уже пройти. К сожалению, RLArena не может делать исключения из правил. Вы сможете подать заявку на соревнование после истечения крайнего срока, чтобы посмотреть, как бы вы выступили.",
    },
    {
      question: "Почему я не могу добавить пользователя в свою команду?",
      answer: "Текст ответа.",
    },
    {
      question:
        "Могу ли я использовать эти данные о конкурсе для стороннего проекта?",
      answer: "Текст ответа.",
    },
    {
      question: "Мне нужна помощь с заявкой на участие в соревновании.",
      answer: "Текст ответа.",
    },
    {
      question: "Меня отстранили от участия в конкурсе.",
      answer: "Текст ответа.",
    },
  ],
  "Наборы данных": [
    {
      question: "Вопрос 6",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 7",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 8",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 9",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 10",
      answer: "Текст ответа.",
    },
  ],
  "Конфиденциальность и безопасность": [
    {
      question: "Вопрос 11",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 12",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 13",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 14",
      answer: "Текст ответа.",
    },
    {
      question: "Вопрос 15",
      answer: "Текст ответа.",
    },
  ],
};

export default function FAQpage() {
  const [activeSection, setActiveSection] = useState("Соревнования");
  const [openQuestion, setOpenQuestion] = useState(
    "Почему я не могу принять участие в конкурсе?"
  );

  const handleToggle = (question) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-8">FAQ</h1>
        <div className="flex w-full max-w-5xl">
          {/* Sidebar */}
          <div className="w-1/4 pr-4 space-y-4 p-4 bg-white border border-gray-200 rounded-md mr-4">
            {Object.keys(Questions).map((section) => (
              <div
                key={section}
                onClick={() => setActiveSection(section)}
                className={`cursor-pointer p-2 rounded-md text-sm font-semibold transition-colors ${
                  activeSection === section
                    ? "text-gray-500 bg-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {activeSection === section ? "− " : "+ "} {section}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="w-3/4 space-y-4 p-4 bg-white border border-gray-200 rounded-md">
            {Questions[activeSection].map((item) => {
              const isOpen = openQuestion === item.question;
              return (
                <div key={item.question} className="border-b pb-4">
                  <div
                    className={`cursor-pointer font-bold text-base flex items-start ${
                      isOpen ? "text-gray-500" : "text-black"
                    }`}
                    onClick={() => handleToggle(item.question)}
                  >
                    <span className="mr-2">{isOpen ? "−" : "+"}</span>
                    {item.question}
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-2 pl-6"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
