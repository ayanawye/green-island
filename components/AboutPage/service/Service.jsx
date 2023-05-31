import { useState } from 'react';
import s from './Service.module.scss';
import SortingList from '../sortingList/SortingList';

const Service = () => {
  const [materials, setMaterials] = useState([
    {id: 1, title: "Макулатура", path: "/paper", src: "/assets/images/book.png", items: [
      {id: 1, title: "Газеты и журналы", path: "/magazin"},
      {id: 2, title: "Газеты и журналы", path: "/magazin"},
      {id: 3, title: "Газеты и журналы", path: "/magazin"},
    ]},
    {id: 2, title: "Пластик", path: "/plastic", src: '/assets/images/book.png', items: [
      {id: 1, title: "Газеты и журналы", path: "/magazin"},
      {id: 2, title: "Газеты и журналы", path: "/magazin"},
      {id: 3, title: "Газеты и журналы", path: "/magazin"},
    ]},
  ])

  return (
    <section className={s.service}>
      <div className={s.container}>
        <h2 className={s.title}>Вывозим на переработку</h2>
        <p className={s.desc}>следующие виды вторсырья:</p>
        <SortingList materials={materials} />
      </div>
    </section>
  );
};

export default Service;