import s from './Partners.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Tazar from '../../../assets/images/tazar.webp'

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
      )
    }
  }

  return (
    <section className={s.partners}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.name}>ПАРТНЕРЫ</div>
          <h3 className={s.title}>С НАМИ РАБОТАЮТ</h3>
          <Slider style={{paddingLeft: "6%"}} {...settings}>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
            <div className={s.card}>
              <Image src={Tazar} alt='tazar' className={s.image} />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Partners;
