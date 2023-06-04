import React from "react";
import Slider from "react-slick";
import Candle from '../../../assets/images/candle.jpg'
import Image from "next/image";
import s from './Products.module.scss';


const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section className={s.product}>
      <div className={s.text}>
        <p className={s.section__name}>ИНТЕРЕСНОЕ</p>
        <h3 className={s.title}>ТОВАРЫ ИЗ ВТОРСЫРЬЯ</h3>
      </div>
      <Slider {...settings} className={s.swiper}>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
        <div className={s.img}>
          <Image placeholder="blur" className={s.image} src={Candle} alt="candle" />
        </div>
      </Slider>
    </section>
  );
};

export default Products;