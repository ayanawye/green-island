import s from "./Addresses.module.scss";
import MyMap from "../yandexMap/MyMap";

const Addresses = () => {
  return (
    <section className={s.addresses}>
      <div className={s.container}>
        <h1 className={s.title}>Адреса наших пунктов приема вторсырья</h1>
        <p className={s.desc}>
          сдать вторсырье можно по следующим адресам г.Бишкек:
        </p>
        <div className={s.address}>
          <div className={s.card}>
            <p className={s.card__address}>г.Бишкек, ул. Курманалиева, 124 </p>
            <div className={s.flex}>
              <p className={s.card__schedule}>Открыто с 9:00 до 20:00</p>
              <a href="tel:0708114464" className={s.card__phone}>
                0708114464
              </a>
            </div>
          </div>
          <div className={s.card}>
            <p className={s.card__address}>г.Бишкек, ул. Курманалиева, 124 </p>
            <div className={s.flex}>
              <p className={s.card__schedule}>Открыто с 9:00 до 20:00</p>
              <a href="tel:0708114464" className={s.card__phone}>
                0708114464
              </a>
            </div>
          </div>
          <div className={s.card}>
            <p className={s.card__address}>г.Бишкек, ул. Курманалиева, 124 </p>
            <div className={s.flex}>
              <p className={s.card__schedule}>Открыто с 9:00 до 20:00</p>
              <a href="tel:0708114464" className={s.card__phone}>
                0708114464
              </a>
            </div>
          </div>
        </div>
        <div className={s.map}>
          <MyMap />
        </div>
      </div>
    </section>
  );
};

export default Addresses;
