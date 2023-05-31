import s from './MyBtn.module.scss'

const MyBtn = ({children, ...props}) => {
  return (
    <button {...props} className={s.btn}>
      {children}
    </button>
  );
};

export default MyBtn;