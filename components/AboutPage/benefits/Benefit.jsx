import Image from 'next/image';
import s from './Benefit.module.scss';
import Earth from '../../../assets/images/earth.png'

const Benefit = () => {
  return (
    <section className={s.benefit}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.text}>
            <h3 className={s.title}>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h3>
          </div>
          <div className={s.cards}>
            <div className={s.card}>
              <div>
                <Image src={Earth}alt='earth' />
              </div>
              <p className={s.card__title}>Сотрудничество</p>
              <p className={s.acrd__desc}>Вывозим от 25 кг</p>
            </div>
            <div className={s.card}>
              <div>
                <Image src={Earth} alt='earth' />
              </div>
              <p className={s.card__title}>Оптимальность</p>
              <p className={s.acrd__desc}>Осуществляем мгновенные выплаты, любые способы оплаты</p>
            </div>
            <div className={s.card}>
              <div>
                <Image src={Earth} alt='earth' />
              </div>
              <p className={s.card__title}>Контейнеры для отходов</p>
              <p className={s.acrd__desc}>Закажите нужное количество контейнеров, и мы не только оперативно доставим их в нужное место, но и обеспечим регулярный вывоз вторсырья по вашей заявке.</p>
            </div>
            <div className={s.card}>
              <div>
                <Image src={Earth} alt='earth' />
              </div>
              <p className={s.card__title}>Гибкость</p>
              <p className={s.acrd__desc}>Наши менеджеры по экологизации бизнеса решат задачи любой сложности и найдут подход к любому клиенту.</p>
            </div>
            <div className={s.card}>
              <div>
                <Image src={Earth} alt='earth' />
              </div>
              <p className={s.card__title}>Пункты приема вторсырья</p>
              <p className={s.acrd__desc}>На наших производственно-заготовительных предприятиях проводится подготовка вторичного сырья к переработке. Здесь можно сдать макулатуру, пластик и пленку.</p>
            </div>
            <div className={s.card}>
              <div>
                <Image src={Earth} alt='earth' />
              </div>
              <p className={s.card__title}>Комплекс услуг</p>
              <p className={s.acrd__desc}>Мы самостоятельно забираем картон, бумагу, книги, журналы, пластиковые бутылки, пленку ПВД , стрейч-пленку и другие виды отходов.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;