import s from "./Partners.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Tazar from "../../../assets/images/tazar.png";
import GreenTeen from "../../../assets/images/teen.png";
import Gorod24 from "../../../assets/images/gorod2.png";
import Gorod from "../../../assets/images/gorod24.png";
import GualiryLife from "../../../assets/images/qualityLife.png";

const Partners = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <section className={s.partners}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.name}>ПАРТНЕРЫ</div>
          <h3 className={s.title}>С НАМИ РАБОТАЮТ</h3>
          <div className={s.slider}>
            <Slider style={{ paddingLeft: "6%" }} {...settings}>
              <div className={`${s.image}${s.card}`}>
                <Image src={Tazar} alt="tazar" className={s.img} />
              </div>
              <div className={`${s.image}${s.card}`}>
                <Image src={GreenTeen} alt="tazar" className={s.img} />
              </div>
              <div className={`${s.image}${s.card}`}>
                <Image src={Gorod} alt="tazar" className={s.img} />
              </div>
              <div className={`${s.image}${s.card}`}>
                <Image src={Gorod24} alt="tazar" className={s.img} />
              </div>
              <div className={`${s.image}${s.card}`}>
                <Image src={GualiryLife} alt="tazar" className={s.img} />
              </div>
              <div className={`${s.image}${s.card}`}>
                <Image src={Gorod} alt="tazar" className={s.img} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
