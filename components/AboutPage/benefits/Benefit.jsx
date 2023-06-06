import Image from "next/image";
import s from "./Benefit.module.scss";
import Earth from "../../../assets/images/earth.png";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {
      delay: custom * 0.3
    },
  }),
};

const Benefit = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={s.benefit}
    >
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.text}>
            <h3 className={s.title}>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h3>
          </div>
          <div className={s.cards}>
            <motion.div custom={1} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Сотрудничество</p>
              <p className={s.acrd__desc}>Вывозим от 25 кг</p>
            </motion.div>
            <motion.div custom={2} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Оптимальность</p>
              <p className={s.acrd__desc}>
                Осуществляем мгновенные выплаты, любые способы оплаты
              </p>
            </motion.div>
            <motion.div custom={3} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Контейнеры для отходов</p>
              <p className={s.acrd__desc}>
                Закажите нужное количество контейнеров, и мы не только
                оперативно доставим их в нужное место, но и обеспечим регулярный
                вывоз вторсырья по вашей заявке.
              </p>
            </motion.div>
            <motion.div custom={4} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Гибкость</p>
              <p className={s.acrd__desc}>
                Наши менеджеры по экологизации бизнеса решат задачи любой
                сложности и найдут подход к любому клиенту.
              </p>
            </motion.div>
            <motion.div custom={5} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Пункты приема вторсырья</p>
              <p className={s.acrd__desc}>
                На наших производственно-заготовительных предприятиях проводится
                подготовка вторичного сырья к переработке. Здесь можно сдать
                макулатуру, пластик и пленку.
              </p>
            </motion.div>
            <motion.div custom={6} variants={textAnimation} className={s.card}>
              <div>
                <Image src={Earth} alt="earth" />
              </div>
              <p className={s.card__title}>Комплекс услуг</p>
              <p className={s.acrd__desc}>
                Мы самостоятельно забираем картон, бумагу, книги, журналы,
                пластиковые бутылки, пленку ПВД , стрейч-пленку и другие виды
                отходов.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefit;
