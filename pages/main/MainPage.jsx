import About from '@/components/AboutPage/about/About';
import s from './MainPage.module.scss'
import Interested from '@/components/AboutPage/interested/Interested';
import Service from '@/components/AboutPage/service/Service';
import Partners from '@/components/AboutPage/partners/Partners';
import Benefit from '@/components/AboutPage/benefits/Benefit';
import Products from '@/components/AboutPage/products/Products';
import Contact from '@/components/AboutPage/contacts/Contact';

const MainPage = () => {
  return (
    <>
      <div className={s.hero}></div>
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