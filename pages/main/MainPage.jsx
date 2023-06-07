import About from '@/components/AboutPage/about/About';
import s from './MainPage.module.scss'
import Interested from '@/components/AboutPage/interested/Interested';
import Service from '@/components/AboutPage/service/Service';
import Partners from '@/components/AboutPage/partners/Partners';
import Benefit from '@/components/AboutPage/benefits/Benefit';
import Products from '@/components/AboutPage/products/Products';
import Contact from '@/components/AboutPage/contacts/Contact';
import MyBtn from '@/components/ui/button/MyBtn';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MainPage = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.content}>
        <h1>Берегите природу вместе с нами</h1>
        <Link className={s.link} href="/regist">
          <MyBtn>Cтать частью зеленого острова</MyBtn>
        </Link>
        </div>
      </div>
      <About />
      <Interested />
      <Service />
      <Partners />
      <Benefit />
      <Products />
      <Contact />
    </>
  );
};

export default MainPage;