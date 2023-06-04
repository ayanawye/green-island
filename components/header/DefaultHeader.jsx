import s from "./Header.module.scss";
import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import Burger from "../ui/burger/Burger";

const DefaultHeader = () => {
  const navigation = [
    { id: 1, title: "О нас", path: "/" },
    { id: 2, title: "Пункты приема", path: "/addresses" },
    { id: 3, title: "Новости", path: "/news" },
    { id: 4, title: "Для вас", path: "/rules" },
  ];
  const log = [
    { id: 1, title: "Войти", path: "/login" },
    { id: 2, title: "Регистрация", path: "/regist" },
  ];
  const router = useRouter();

  return (
    <>
      <div className={s.navigation}>
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
            <MyBtn>
              <Link href="/regist">Sign up</Link>
            </MyBtn>
          </div>
        </div>
      </div>
      <Burger navig={navigation} log={log} />
    </>
  );
};

export default DefaultHeader;
