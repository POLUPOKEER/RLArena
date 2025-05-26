import React from "react";
import { useState, useRef, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { contestDetails } from "../../helpers/competitions-api";

const TabMenu = (props: { competition: contestDetails }) => {
  const competition = props.competition;
  console.log(competition)
  const [activeTab, setActiveTab] = useState("overview");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const tabRef = useRef<HTMLDivElement | null>(null);
  const getTabs = (competition) => {
    const baseTabs = [
      { id: "overview", label: "Обзор" },
      { id: "data", label: "Данные" },
      ...(competition.contest_type !== 'ml'
        ? [{ id: "code", label: "Код" }]
        : []),
      { id: "models", label: "Модели" },
      { id: "leaderboard", label: "Таблица лидеров" },
      { id: "forum", label: "Форум" },
      { id: "rules", label: "Правила" },
    ];

    return baseTabs;
  };

  const tabs = getTabs(competition);

  useEffect(() => {
    if (isDrawerVisible && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isDrawerVisible]);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Обзор</h2>
            {competition.description}
          </div>
        );
      case "data":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Данные</h2>
            <p className="text-lg mb-4">
              Здесь можно скачать файл данных для работы
            </p>
            <div className="space-y-2">
              <a
                href={competition.dataset.file_name}
                download
                className="text-blue-600 hover:underline"
              >
                Скачать данные 1 (CSV)
              </a>
            </div>
          </div>
        );
      case "code":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Код</h2>
            <p className="text-lg mb-4">Ссылки на код проекта:</p>
            <a
              href="https://github.com/your-repository"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub репозиторий
            </a>
          </div>
        );
      case "models":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Модели</h2>
            <p className="text-lg mb-4">
              Описание моделей и инструкции по использованию.
            </p>
          </div>
        );
      case "leaderboard":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Таблица лидеров</h2>
            <p className="text-lg mb-4">Результаты участников соревнования.</p>
          </div>
        );
      case "forum":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Форум</h2>
            <p className="text-lg mb-4">
              Форум для обсуждения вопросов и идей.
            </p>
          </div>
        );
      case "rules":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Правила</h2>
            <p className="text-lg mb-4">
              Правила участия и требования к проектам.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={tabRef} className="w-full bg-white flex flex-col lg:items-center items-start min-h-[450px] pt-8">
      {/* Кнопка меню на мобильных */}
      {isMobile && (
        <div className="w-full px-6 mb-4">
          <Button
            icon={<MenuOutlined />}
            onClick={() => {
              setDrawerVisible(true)
            }}
            className="bg-gray-600 text-white"
          >
            Меню
          </Button>
        </div>
      )}

      {/* Меню вкладок (десктоп) */}
      {!isMobile && (
        <div className="pt-1 max-w-6xl scrollbar-hide w-full">
          <div className="flex ml-4 items-start space-x-12 px-0 flex-col lg:flex-row lg:items-center">
            {tabs.map((tab) => (
              <span
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-base md:text-lg font-semibold cursor-pointer transition-all border-b-2 ${activeTab === tab.id
                  ? "border-slate-600 text-slate-900"
                  : "border-transparent text-gray-500 hover:text-slate-700"
                  } pb-2`}
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Drawer меню (мобильные) */}
      <Drawer
        title="Меню"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={isDrawerVisible}
      >
        <div className="flex flex-col space-y-4">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setDrawerVisible(false);
              }}
              className={`text-base font-semibold cursor-pointer ${activeTab === tab.id
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-500"
                }`}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </Drawer>

      {/* Контент вкладки */}
      <div className="w-full max-w-5xl bg-white px-6 md:px-8 lg:mt-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabMenu;
