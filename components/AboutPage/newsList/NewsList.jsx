import { useState } from "react";
import s from "./NewsList.module.scss";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Набор в команду",
      img: "../../../assets/images/driver.jpg",
    },
    {
      id: 2,
      title: "Нужен менеджен отдела продаж",
      img: "../../../assets/images/driver.jpg",
    },
    {
      id: 3,
      title: "Набор в команду",
      img: "../../../assets/images/driver.jpg",
    },
  ]);
  return (
    <section className={s.news}>
      <div className={s.container}>
        <h1 className={s.title}>СВЕЖИЕ НОВОСТИ</h1>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.gradient}>
              <div className={s.line}>
                <h3>ЧТО МОЖНО СОЗДАТЬ ИЗ ПЕРЕРАБОТАННОГО МУСОРА?</h3>
              </div>
            </div>
          </div>
          <div className={s.cards_grid}>
            {news.map(el => (
              <NewsCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
