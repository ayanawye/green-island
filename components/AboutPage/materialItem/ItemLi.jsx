import Link from "next/link";
import s from './SortingItem.module.scss';

const ItemLi = ({item}) => {
  return (
    <Link className={s.li} href={item.path}>{item.title}</Link>
  );
};

export default ItemLi;