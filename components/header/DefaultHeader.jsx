import s from './Header.module.scss';
import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import { message } from 'antd';

const DefaultHeader = () => {
  const navigation = [
    { id: 1, title: "О нас", path: "/" },
    { id: 2, title: "Пункты приема", path: "/addresses" },
    { id: 3, title: "Новости", path: "/news" },
    { id: 4, title: "Для вас", path: "/rules" },
  ];
  const router = useRouter();

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
      <nav className={s.nav}>
        {navigation.map(({ id, path, title }) => (
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
        <Link href="/login">Войти</Link>
        <div className={s.btn}>
          <MyBtn onClick={() => logOut()}>
            <Link href="/regist">Sign up</Link>
          </MyBtn>
        </div>
      </div>
    </>
  );
};

export default DefaultHeader;
