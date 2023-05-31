import Image from 'next/image';
import s from './Interested.module.scss'
import Link from 'next/link';
import Laptop from '../../../assets/images/laptop.png'
import Statistic from '../../../assets/images/service.png'
import Girl from '../../../assets/images/reading.png'

const Interested = () => {
  return (
    <section className={s.interested}>
      <div className={s.container}>
        <div className={s.name}>РАЗДЕЛЫ</div>
        <h1 className={s.title}>Основные деятельности <span>GreenIsland</span></h1>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.image}>
              <Image alt='laptop' placeholder='blur' className={s.img} src={Laptop} />
            </div>
            <div className={s.card__content}>
              <p className={s.card__title}>Блог</p>
              <p className={s.card__desc}>новости, волонтёрство</p>
              <Link href='/news' className={s.card__link}>ПОДРОБНЕЕ</Link>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.image}>
              <Image alt='girl' placeholder='blur' className={s.img} src={Girl} />
            </div>
            <div className={s.card__content}>
              <p className={s.card__title}>Энциклопедия</p>
              <p className={s.card__desc}>правила сортировки,
                что/когда/где сдавать</p>
              <Link href='/rules' className={s.card__link}>ПОДРОБНЕЕ</Link>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.image}>
              <Image alt='teem' placeholder='blur' className={s.img} src={Statistic} />
            </div>
            <div className={s.card__content}>
              <p className={s.card__title}>Услуги</p>
              <p className={s.card__desc}>наши услуги, специальные
                предложения для бизнеса</p>
              <Link href='/news' className={s.card__link}>ПОДРОБНЕЕ</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interested;