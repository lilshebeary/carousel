import React, { useState } from "react";
import CaroselItem from "./CarouselItem";

const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Baby",
      description: "I love babies, they are the best",
      icon: require("./Media/baby-clip.svg"),
    },
    {
      title: "Dog",
      description: "Walking my dog is great exercise, it makes me so happy.",
      icon: require("./Media/dog-walk-pic.svg"),
    },
    {
      title: "Neighborhood",
      description: "I love our neighborhood. it is save and beautiful.",
      icon: require("./Media/small-town-pic.svg"),
    },
  ];

  //   const updateIndex = (newIndex) => {
  //     if (newIndex < 0){
  //       newIndex = 0;
  //     } else if(newIndex >= item.length){

  //     }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate:(-${activeIndex * 100})` }}
      >
        {items.map((item) => {
          return <CaroselItem item={item} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button className="button-arrow">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </button>

        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button className="indicator-buttons">
                <span class="material-symbols-outlined">
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        
        <button className="button-arrow">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>

    </div>
  );
};

export default Carousel2;
