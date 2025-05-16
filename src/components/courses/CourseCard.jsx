import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, description, image }) => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/course");
  };

  return (
    <div className="bg-white w-full max-h-[460px] max-w-[352px] border border-[#b1b5c3] rounded-[20px] px-4 md:px-[21px] py-[25px] flex flex-col mx-auto">
      <img
        src={image}
        alt={title}
        className="w-[200px] md:w-[243px] h-[200px] md:h-[243px] self-center object-contain"
      />
      <div className="flex flex-col justify-between flex-1 pt-4 md:pt-[17px]">
        <div>
          <h3 className="text-[#141416] text-base text-[16px] font-[500]">
            {title}
          </h3>
          <p className="text-[#141416] text-[12px] leading-5">
            {description}
          </p>
        </div>
        <button
          onClick={handleStartClick}
          className="py-2 md:py-3 px-4 md:px-11 max-h-[40px] rounded-full bg-[#141416] hover:bg-[#696969]/80 transition-colors text-white text-[12px] md:text-[14px] leading-4 self-start font-bold">
          Начать
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
