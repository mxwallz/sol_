// components/CategoryCarousel.jsx
import Slider from "react-slick";
import ToolCard from "./ToolCard";

const CategoryCarousel = ({ title, tools }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: tools.length < 4 ? tools.length : 4,
    slidesToScroll: tools.length < 4 ? tools.length : 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: tools.length < 3 ? tools.length : 3,
          slidesToScroll: tools.length < 3 ? tools.length : 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: tools.length < 2 ? tools.length : 2,
          slidesToScroll: tools.length < 2 ? tools.length : 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          right: "-25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          left: "-25px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="my-8 overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className={`flex justify-${tools.length < 4 ? 'center' : 'start'} overflow-x-hidden`}>
        <Slider {...settings}>
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryCarousel;
