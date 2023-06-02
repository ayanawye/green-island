import s from './BigText.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  }
}
const textAnimation2 = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: {
    x: -100,
    opacity: 1,
    transition: {
      delay: 1,
    }
  }
}

const BigText = ({leftText, rightText}) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      className={s.text}
      >
      <motion.div variants={textAnimation} className={s.left}>{leftText}</motion.div>
      <motion.div variants={textAnimation2} className={s.right}>{rightText}</motion.div>
    </motion.div>
  );
};

export default BigText;