import s from './About.module.scss';
import Trash from '../../../assets/images/trash.png';
import Image from 'next/image';
import BigText from '../../ui/bigText/BigText';

const About = () => {
  return (
    <>
      <section className={s.about}>
        <div className={`${s.container} ${s.details}`}>
          <div className={s.left}>
            <p className={s.name}>О НАС</p>
            <h1 className={s.title}>Компания <span>GreenIsland</span></h1>
            <p className={s.desc}>предоставляет полный комплекс услуг по сбору и вывозу вторсырья для последующей переработки</p>
            <div className={s.image}>
              <Image src={Trash} alt="" />
            </div>
          </div>
          <div className={s.right}>
            <div className={s.content}>
              <div className={s.ball}>1</div>
              <div>
                <p className={s.content__title}>Услуги вывоза вторсырья</p>
                <p className={s.content__desc}>Мы самостоятельно забираем картон, бумагу, книги, журналы, пластиковые бутылки, пленку ПВД , стрейч-пленку и другие виды отходов.</p>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.ball}>2</div>
              <div>
                <p className={s.content__title}>Собственные пункты приема вторсырья</p>
                <p className={s.content__desc}>На наших производственно-заготовительных предприятиях проводится прием, сортировка, прессование и подготовка вторичного сырья к переработке. Здесь можно сдать макулатуру, пластик и пленку.</p>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.ball}>3</div>
              <div>
                <p className={s.content__title}>Контейнеры для раздельного сбора отходов</p>
                <p className={s.content__desc}>Закажите нужное количество контейнеров, и мы не только оперативно доставим их в нужное место, но и обеспечим регулярный вывоз вторсырья по вашей заявке.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BigText leftText={'СОБИРАЕМ ЭКОСООБЩЕСТВО'} rightText={"ВМЕСТЕ С НАМИ!"}/>
    </>
  );
};

export default About;