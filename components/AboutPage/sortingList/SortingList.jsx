import React from "react";
import SortingItem from "../materialItem/SortingItem";
import s from "./SortingList.module.scss";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    }
  }),
};

const SortingList = ({ materials }) => {
  return (
    <motion.div 
     initial="hidden" 
     whileInView="visible"
     viewport={{once: true}} 
     className={s.cards}
    >
      {materials.map((material, index) => (
        <SortingItem
          custom={index + 1}
          animation={textAnimation}
          key={material.id}
          material={material}
        />
      ))}
    </motion.div>
  );
};

export default SortingList;
