import React, { useState } from "react";
import styles from "./About.module.css";
import Card from "./Card/Card";
import Team from "./Team/Team";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./SliderArrow/Slider";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { data } from "../../assets/data";

export default function Information() {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);

  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance);
    if (swiper) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiper.isBeginning);
      });
      swiperInstance.on("slideChange", () => {
        setIsEnd(swiper.isEnd);
      });
    }
    console.log(swiper);
  };

  // useEffect(() => {
  //   if (swiper) {
  //     console.log(swiper);
  //     swiper.on("slideChange", () => {
  //       setIsBeginning(swiper.isBeginning);
  //     });
  //     swiper.on("slideChange", () => {
  //       setIsEnd(swiper.isEnd);
  //     });
  //   }
  // }, [swiper]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>What says our happy Clients</h1>
        <div className={styles.arrowwrapper}>
          {isBeginning && (
            <div className={styles.arrow} onClick={() => swiper.slidePrev()}>
              <Slider type={"left"} />
            </div>
          )}
          {isEnd && (
            <div className={styles.arrow} onClick={() => swiper.slideNext()}>
              <Slider type={"right"} />
            </div>
          )}
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={3}
        navigation
        allowTouchMove
        className={styles.swiperwrapper}
        onSwiper={handleSwiper}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>{<Card cardData={card} />}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.teamwrapper}>
        <h1 className={styles.title}>Our Team</h1>
        <div className={styles.members}>
          <Team className={styles.teamwrapper} />
        </div>
      </div>
    </div>
  );
}
