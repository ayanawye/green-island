import Link from "next/link";
import Arrow from "../../../assets/images/arrow-right.png";
import s from "./SortingItem.module.scss";
import Image from "next/image";
import ItemLi from "./ItemLi";
import { motion } from "framer-motion";

const SortingItem = ({ material, animation }) => {
  return (
    <motion.div
      variants={animation}
      className={s.card}
    >
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.top__left}>
            {/* <div className={s.image}>
              <img className={s.img} src={material.src} alt="book" />
            </div> */}
            <p className={s.title}>{material.title}</p>
          </div>
          <Link href="/paper" className={s.image}>
            <Image
              placeholder="blur"
              className={s.img}
              src={Arrow}
              alt="book"
            />
          </Link>
        </div>
        <ul className={s.list}>
          {material.items.map((item) => (
            <ItemLi key={item.id} item={item} />
          ))}
          <Link href={"/test"} className={s.hoverlink}>
            123
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default SortingItem;
