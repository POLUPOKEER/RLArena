export type competitionType = Record<'start_date' | 'end_date' | 'title' | 'description' | 'icon', string>;

export const competitionsData: competitionType[] = [
  //Соревнования, уоторые уже идут
  {
    start_date: "12.12.2024",
    end_date: "30.05.2025",
    title: "1_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/nfl.png",
  },
  {
    start_date: "10.01.2024",
    end_date: "20.07.2025",
    title: "2_Unlock Global with Gemma",
    description:
      "Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта",
    icon: "/gemma.png",
  },
  {
    start_date: "12.12.2024",
    end_date: "30.05.2025",
    title: "3_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/tmd.png",
  },
  {
    start_date: "28.04.2024",
    end_date: "15.08.2025",
    title: "4_I for Good Challenge",
    description:
      "Используйте AI для решения глобальных проблем и выиграйте уникальные призы.",
    icon: "/tmd.png",
  },
  {
    start_date: "28.04.2024",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
  },

  //Соревнования, которые скоро начануться (до старта меньше недели)
  {
    start_date: "11.05.2025",
    end_date: "30.05.2025",
    title: "1_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/nfl.png",
  },
  {
    start_date: "12.05.2025",
    end_date: "20.07.2025",
    title: "2_Unlock Global with Gemma",
    description:
      "Создайте варианты моделей Gemma для конкретного языка или уникального культурного аспекта",
    icon: "/gemma.png",
  },
  {
    start_date: "13.05.2025",
    end_date: "30.05.2025",
    title: "3_NFL Big Data Bowl 2025",
    description:
      "Помогите использовать поведение перед привязкой для прогнозирования и лучшего понимания тенденций команды и игроков НФЛ",
    icon: "/tmd.png",
  },
  {
    start_date: "14.05.2025",
    end_date: "15.08.2025",
    title: "4_I for Good Challenge",
    description:
      "Используйте AI для решения глобальных проблем и выиграйте уникальные призы.",
    icon: "/tmd.png",
  },
  {
    start_date: "15.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/nfl.png",
  },
  {
    start_date: "4.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/nfl.png",
  },
  {
    start_date: "3.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
  },
  {
    start_date: "2.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/gemma.png",
  },
  {
    start_date: "1.05.2025",
    end_date: "25.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/tmd.png",
  },
  //Соревнования без статуса
  {
    start_date: "6.06.2025",
    end_date: "7.07.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
  },
  {
    start_date: "8.08.2025",
    end_date: "9.09.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
  },
  {
    start_date: "7.07.2025",
    end_date: "8.08.2025",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
  },
  //Завершившиеся соревнование 
  {
    start_date: "1.05.2022",
    end_date: "25.09.2022",
    title: "5_Data Science Hackathon",
    description:
      "Соревнование для решения сложных задач с использованием анализа данных.",
    icon: "/hackathon.png",
  },
];