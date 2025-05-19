import React from "react";
import { useState, useRef, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const tabRef = useRef<HTMLDivElement | null>(null);
  const tabs = [
    { id: "overview", label: "Обзор" },
    { id: "data", label: "Данные" },
    { id: "code", label: "Код" },
    { id: "models", label: "Модели" },
    { id: "leaderboard", label: "Таблица лидеров" },
    { id: "forum", label: "Форум" },
    { id: "rules", label: "Правила" },
  ];

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
            {/* Сюда твой длинный текст из "Обзор" */}
            <p className="text-lg mb-12">
              В этом соревновании по симуляции вам предстоит разработать агента,
              который играет в шахматы в условиях жёстких ограничений по
              процессору и памяти.
            </p>
            <h2 className="text-2xl font-bold mb-4">Описание</h2>

            <p className="text-lg mb-6">
              «Тщательное обдумывание конструкции компьютера, играющего в
              шахматы, может послужить толчком к решению других проблем схожего
              характера и большей значимости» — Клод Шеннон (1950)
            </p>
            <p className="text-lg mb-6">
              Шахматы, которые часто называют «королевской игрой», — это
              стратегическая настольная игра для двух игроков, известная своей
              сложной структурой и требующая напряжённой умственной работы.
              Чтобы стать мастером шахмат, необходимо глубоко понимать как
              стратегическое планирование, так и тактическое исполнение. Это
              поле боя, где преобладают дальновидность, расчёт и адаптивность.
            </p>
            <p className="text-lg mb-6">
              Шахматы долгое время были грандиозным испытанием для
              искусственного интеллекта, испытательным полигоном для расширения
              границ алгоритмов и вычислительной мощности. Хотя такие
              достижения, как движки AlphaZero и Stockfish, достигли
              сверхчеловеческой производительности, они часто полагаются на
              огромные ресурсы, недоступные большинству разработчиков.
            </p>
            <p className="text-lg mb-6">
              Однако в этом конкретном соревновании есть интересный поворот: в
              дополнение к чистому стратегическому мастерству упор делается на
              эффективность и элегантность. Цель этого соревнования — сместить
              акцент с вычислений методом перебора на элегантный и эффективный
              дизайн. Забудьте о массивных предварительно рассчитанных таблицах
              и бесконечных деревьях поиска — мы уравниваем условия и делаем
              акцент на эффективности и стратегическом мышлении.
            </p>
            <p className="text-lg mb-12">
              Перед вами стоит задача разработать инновационные и эффективные
              решения для игры в шахматы против других агентов, тем самым
              расширяя границы исследований в области искусственного интеллекта.
              Изучение новых оптимизированных методов может помочь в решении
              проблем, которые становятся всё более сложными и масштабными,
              таких как усовершенствование методов моделирования и логического
              вывода, а также традиционных алгоритмов на основе эвристики,
              выходящих за рамки шахмат.
            </p>

            <h2 className="text-2xl font-bold mb-4">Оценка</h2>

            <p className="text-lg mb-6">
              Каждый день ваша команда может отправлять на соревнование до 5
              агентов (ботов). Каждый отправленный бот будет играть эпизоды
              (игры) против других ботов из таблицы лидеров с аналогичным
              рейтингом навыков. Со временем рейтинг навыков будет повышаться за
              счёт побед, понижаться за счёт поражений или выравниваться за счёт
              ничьих.
            </p>
            <p className="text-lg mb-6">
              Каждый отправленный вами бот будет продолжать играть в эпизодах до
              конца соревнования, при этом более новые боты будут выбираться для
              более частого участия. Как только у вас будет два активных бота,
              более старые будут деактивированы. В таблице лидеров будет
              отображаться только ваш бот с наибольшим количеством очков, но вы
              можете отслеживать прогресс всех своих ботов на странице
              «Отправки».
            </p>
            <p className="text-lg mb-6">
              {" "}
              У каждого задания есть предполагаемый уровень сложности, который
              моделируется с помощью нормального распределения N(μ,σ2), где μ —
              предполагаемый уровень сложности, а σ — неопределённость этой
              оценки, которая со временем уменьшается.
            </p>
            <p className="text-lg mb-6">
              Когда вы загружаете заявку, мы сначала запускаем проверочный
              эпизод, в котором эта заявка играет против своих копий, чтобы
              убедиться, что она работает правильно. Если эпизод завершается
              неудачей, заявка помечается как ошибочная, и вы можете скачать
              журналы агента, чтобы понять, почему. В противном случае мы
              инициализируем заявку с μ0=600, и она присоединяется к пулу для
              постоянной оценки. В это время мы также отключаем старые агенты,
              если общее количество активных агентов превышает три.
            </p>
            <h3 className=" font-bold ">Система ранжирования</h3>
            <p className="text-lg mb-6">
              После завершения эпизода мы обновим оценку рейтинга для всех ботов
              в этом эпизоде. Если одна пара ботов выиграла, мы увеличим их μ и
              уменьшим μ соперника — если результат был ничейным, мы приблизим
              значения μ к их среднему значению. Обновления будут иметь
              величину, зависящую от отклонения от ожидаемого результата на
              основе предыдущих значений μ, а также от неопределённости каждого
              бота σ. Мы также уменьшаем значения σ по отношению к объёму
              информации, полученной в результате. Оценка, с которой ваш бот
              выигрывает или проигрывает эпизод, не влияет на обновление
              рейтинга навыков.
            </p>
            <h3 className=" font-bold ">Окончательная оценка</h3>
            <p className="text-lg mb-12">
              {" "}
              По истечении крайнего срока подачи заявок 11 февраля 2025 года
              заявки будут заблокированы, а таблица лидеров будет сброшена. С 11
              февраля 2025 года по (примерно) 25 февраля 2025 года мы продолжим
              выпускать эпизоды. В течение этого периода только ваши активные
              заявки будут учитываться в таблице лидеров. По завершении этого
              периода таблица лидеров будет окончательной.{" "}
            </p>
          </div>
        );
      case "data":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Данные</h2>
            <p className="text-lg mb-4">
              Здесь можно предоставить файлы для скачивания...
            </p>
            <div className="space-y-2">
              <a
                href="/files/data1.csv"
                download
                className="text-blue-600 hover:underline"
              >
                Скачать данные 1 (CSV)
              </a>
              <a
                href="/files/data2.pdf"
                download
                className="text-blue-600 hover:underline"
              >
                Скачать отчет (PDF)
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
