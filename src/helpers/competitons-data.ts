export type competitionType = Record<'start_date' | 'end_date' | 'title' | 'description' | 'icon' | 'categoty' | 'author' | 'slug', string>;

export const competitionsData: competitionType[] = [
  //Соревнования, уоторые уже идут
  {
    author: 'NFL',
    start_date: "12.12.2024",
    end_date: "30.05.2025",
    title: "7_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/nfl.png",
    categoty: "beginner",
    slug: ""
  },
  {
    author: 'Google',
    start_date: "10.01.2024",
    end_date: "20.07.2025",
    title: "2_Unlock Global with Gemma",
    description:
      "Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта",
    icon: "/gemma.png",
    categoty: "middle",
    slug: ""
  },
  {
    author: 'TMD',
    start_date: "12.12.2024",
    end_date: "30.05.2025",
    title: "3_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/tmd.png",
    categoty: "professional",
    slug: ""
  },
  {
    author: 'TMD',
    start_date: "28.04.2024",
    end_date: "15.08.2025",
    title: "4_I for Good Challenge",
    description:
      "Используйте AI для решения глобальных проблем и выиграйте уникальные призы.",
    icon: "/tmd.png",
    categoty: "professional",
    slug: ""
  },
  {
    author: 'TMD',
    start_date: "28.04.2024",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
    categoty: "middle",
    slug: ""
  },

  //Соревнования, которые скоро начануться (до старта меньше недели)
  {
    author: 'NFL',
    start_date: "28.06.2025",
    end_date: "29.06.2025",
    title: "1_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/nfl.png",
    categoty: "beginner",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "02.06.2025",
    end_date: "20.07.2025",
    title: "2_Unlock Global with Gemma",
    description:
      "Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта",
    icon: "/gemma.png",
    categoty: "middle",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "01.06.2025",
    end_date: "25.06.2025",
    title: "3_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/tmd.png",
    categoty: "beginner",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "28.05.2025",
    end_date: "15.08.2025",
    title: "4_I for Good Challenge",
    description:
      "Используйте AI для решения глобальных проблем и выиграйте уникальные призы.",
    icon: "/tmd.png",
    categoty: "beginner",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "29.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/nfl.png",
    categoty: "middle",
    slug: ""
  },
  {
    author: 'NFL',
    start_date: "4.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/nfl.png",
    categoty: "professional",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "3.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
    categoty: "beginner",
    slug: ""
  },
  {
    author: 'Google',
    start_date: "2.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/gemma.png",
    categoty: "professional",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "1.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
    categoty: "middle",
    slug: ""
  },
  //Соревнования без статуса
  {
    author: 'Пупкин В.П',
    start_date: "6.06.2025",
    end_date: "7.07.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
    categoty: "professional",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "8.08.2025",
    end_date: "9.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
    categoty: "middle",
    slug: ""
  },
  {
    author: 'Пупкин В.П',
    start_date: "7.07.2025",
    end_date: "8.08.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
    categoty: "professional",
    slug: ""
  },
  //Завершившиеся соревнование 
  {
    author: 'Пупкин В.П',
    start_date: "1.05.2022",
    end_date: "25.09.2022",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
    categoty: "middle",
    slug: ""
  },
];