import Link from 'next/link';
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from './Header.module.scss';
import { message } from 'antd';

const OperatorHeader = () => {
  const operatorNavigation = [
    { id: 2, title: "Все заявки", path: "/operator" },
    { id: 1, title: "Мои заявки", path: "/operator/myapplications" },
    { id: 3, title: "Список бригад", path: "/operator/brig" },
    { id: 4, title: "Регистрация", path: "/operator/teamregist" },
  ];
  const router = useRouter()

  const logOut = () => {
    localStorage.removeItem("userInfo")
    message.open({
      type: "success",
      content: "Вы вышли с аккаунта",
      style: {
        marginTop: "100px"
      }
    })
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }
  return (
    <>
    {router.pathname.includes("operator") ? (
            <>
              <nav className={s.nav}>
              {operatorNavigation.map(({ id, path, title }) => (
                  <Link
                    href={path}
                    key={id}
                    className={router.pathname === path ? s.active : s.link}
                  >
                    {title}
                  </Link>
              ))}
              </nav>
              <div className={s.flex}>
                <Link href="/operator/profile"></Link>
                <div className={s.btn}>
                  <MyBtn onClick={() => logOut()}>
                    <Link href="/">Выйти</Link>
                  </MyBtn>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
    </>
  );
};

export default OperatorHeader;