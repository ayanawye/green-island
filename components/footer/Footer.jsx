import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';
import Logo from '../../assets/images/myLogo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}>
            <Link href='/'><Image src={Logo} alt="logo" className={s.img}/></Link>
          </div>
          <div className={s.nav}>
            <p>Социальные сети</p>
            <div>
              <a href='#'>Telegram</a>
              <a href='#'>Instagram</a>
              <a href='#'>Twitter</a>
            </div>
          </div>
          <div className={s.nav}>
            <p>Мы</p>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </div>
          <div className={s.nav}>
            <p>Офис</p>
            <a href="#">г.Бишкек, ул.Токтогула 125,
              бц/ Avangard
            </a>
          </div>
        </div>
        <p className={s.company}>© ОсОО «Кыргызский экологический оператор»</p>
      </div>
    </footer>
  );
};

export default Footer;