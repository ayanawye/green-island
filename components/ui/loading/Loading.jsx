import React from "react";
import s from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={s.content}>
      <div className={s.preloader_spinner}></div>
    </div>
  )
};

export default Loading;
