import s from './BigText.module.scss';

const BigText = ({leftText, rightText}) => {
  return (
    <div className={s.text}>
      <div className={s.left}>{leftText}</div>
      <div className={s.right}>{rightText}</div>
    </div>
  );
};

export default BigText;