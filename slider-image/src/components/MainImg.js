import React, { useEffect, useState } from "react";
import "./MainImg.css";

const MainImg = () => {
  const data = [
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwq_8KtbcD8ZtgXwLqUm97n468WtAOEdoBXQ&usqp=CAU",
      header: "Slide 1",
      content:
        "this is FIRST and this explanation belon to slide explanation and this uis just a test",
    },
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7QZqLdkYFyfCjIodSZkFiVm9Sicwlq4Fjg&usqp=CAU",
      header: "Slide 2",
      content:
        "this is Second and this explanation belon to slide explanation and this uis just a test",
    },
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&usqp=CAU",
      header: "Slide 3",
      content:
        "this is THIRD and this explanation belon to slide explanation and this uis just a test",
    },
  ];

  const [array, setArray] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(array.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === array.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  let slideScrol;
  const autoScroll = () => {
    slideScrol = setInterval(() => {
      nextSlide();
    }, 1000);
  };
  useEffect(() => {
    autoScroll();
    return () => clearInterval(slideScrol);
  }, [currentSlide]);
  return (
    <>
      {/* {data.map((item, index) => {
        return index === currentSlide ? item : "";
      })} */}
      <div
        style={{
          transform: "translateX(0%)",
          transition: "all 0.5s ease",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundImage: `url(${data[currentSlide].photo})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button style={{ borderRadius: "100%" }} onClick={prevSlide}>
            {" "}
            {"<-"}
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              left: "97.8%",
              borderRadius: "100%",
            }}
          >
            {"->"}
          </button>
        </div>
        <div className="animatio">
          <h1 style={{ color: "white" }}>{data[currentSlide].header}</h1>
          <p style={{ color: "white" }}>{data[currentSlide].content}</p>
          <hr></hr>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default MainImg;
