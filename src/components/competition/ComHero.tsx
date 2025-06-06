import { useEffect, useState } from "react";
import { contestDetails } from "../../helpers/competitions-api";
import { getCurrentUser } from "../../helpers/users-api";
import { Button, Modal } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { deleteContest } from "../../helpers/competitions-api";
import { useNavigate } from "react-router-dom";
const ComHero = (props: { competition: contestDetails }) => {
  const [isHeartRed, setIsHeartRed] = useState(false);
  const competition = props.competition;
  const toggleHeartColor = () => setIsHeartRed(!isHeartRed);
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser(token);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  const onConfirm = async () => {
    await deleteContest(competition.uuid, token);
    navigate('/Main')
    window.location.reload()
  };
  const showDeleteConfirm = () => {
    const { confirm } = Modal;
    confirm({
      title: 'Вы уверены, что хотите удалить?',
      icon: <ExclamationCircleFilled style={{ color: '#ff0000' }} />,
      content: 'Это действие нельзя будет отменить',
      okText: 'Да, удалить',
      okType: 'danger',
      cancelText: 'Отмена',
      centered: true,
      onOk() {
        onConfirm();
      },
    });
  }
  return (
    user &&
    <section className="relative w-full flex flex-col items-center py-10 px-4 overflow-hidden">
      {/* Основной контейнер */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl bg-primary shadow-lg rounded-[30px] p-6 md:p-10 mb-6">
        {/* Левая часть: Картинка */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <img
            src={competition.image}
            alt="Competition illustration"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
          <div className="mt-4 text-sm md:text-base text-gray-700 text-center md:text-left">
            Дата проведения: <strong>с {competition.start_date} по {competition.end_date}</strong>
          </div>
        </div>

        {/* Правая часть: Текст */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-tight mb-4">
            {competition.title}
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-500 mb-6">
            {competition.shortDescription}
          </p>
          {
            !(user.id === competition.author_id) ?
              <button className="bg-black text-white px-8 py-3 rounded-full text-[18px] w-full md:w-auto">
                Принять участие
              </button> :
              <Button
                type="primary"
                danger
                onClick={showDeleteConfirm}
                className="
        bg-[#ff0000] hover:bg-[#ff0000]/90
        text-white px-8 py-3 h-auto
        rounded-full text-lg
        w-full md:w-auto
        flex items-center justify-center
        transition-colors duration-200
      "
              >
                Удалить Соревнование
              </Button>
          }

        </div>

        {/* Кнопка-сердечко */}
        <button
          onClick={toggleHeartColor}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${isHeartRed ? "fill-red-500" : "fill-white"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Теги */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-3 mt-4 md:mt-6 px-4">
        <span className="text-sm md:text-base lg:text-lg text-black text-center">
          Теги:
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          {[competition.contest_type, competition.categoty, "Обучение с подкреплением"].map(
            (tag) => (
              <button
                key={tag}
                className="bg-[#2B73B1] text-white px-4 py-2 rounded-full text-sm md:text-base"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>

      {/* Декоративное вращающееся изображение */}
      <img
        src="/Group.svg"
        alt="Decorative ellipse"
        className={`absolute w-[15%] sm:w-[10%] lg:w-[8%] right-[2%] bottom-[15%] transform transition-all duration-300`}
      />
    </section>
  );
};

export default ComHero;
