import React, { useEffect } from 'react';
import s from './Contact.module.scss';
import Image from 'next/image';
import Location from '../../../assets/images/location.png';
import PhoneCall from '../../../assets/images/phone-call.png';
import Chat from '../../../assets/images/chat.png';
import YandexMap from '../yandexMap/YandexMap';

const Contact = () => {
  return (
    <>
      <section className={s.contact}>
        <div className={s.container}>
          <div className={s.content}>
            <h3 className={s.title}>СВЯЗАТЬСЯ С НАМИ</h3>
            <p className={s.desc}>Если захотите с нами связаться и спросить что-то про раздельный сбор отходов,
              пишите на <a href="mailto:green@reo.ru">green@reo.ru</a>. Конструктив, предложения, какие-то дела
            </p>
          </div>
        </div>
        <div className={s.address}>
          <div className={s.container}>
            <div className={s.grid}>
              <div className={s.right}>
                <h4 className={s.right__title}>Мы всегда на связи</h4>
                <div className={s.detail}>
                  <div className={s.image}>
                    <Image className={s.img} src={Location} alt='location-logo' placeholder='blur' />
                  </div>
                  <p>г.Бишкек, ул.Токтогула 125,
                    бц/ Avangard
                  </p>
                </div>
                <div className={s.detail}>
                  <div className={s.image}>
                    <Image className={s.img} src={PhoneCall} alt='call-logo' placeholder='blur' />
                  </div>
                  <div className={s.number}>
                    <a href="tel:+996708780274">+996708780274</a>
                    <a href="tel:+996555780274">+996555780274</a>
                    <a href="tel:+996779780274">+996779780274</a>
                  </div>
                </div>
                <div className={s.detail}>
                  <div className={s.image}>
                    <Image className={s.img} src={Chat} alt='chat-logo' placeholder='blur' />
                  </div>
                  <a href="mailto:greenLife@gmail.com">E-mail: greenLife@gmail.com</a>
                </div>
              </div>
              <div className={s.left}>
                <YandexMap />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;