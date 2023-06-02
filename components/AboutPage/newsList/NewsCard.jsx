import React, { useReducer } from "react";
import s from './NewsList.module.scss'
import { useRouter } from "next/router";

const NewsCard = ({ el }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/news/${el.title}`)} className={s.card_grid}>
      <div className={s.gradient}>
        <h3>{el.title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
