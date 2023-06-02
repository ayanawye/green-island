import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from './Header.module.scss';
import { message } from "antd";

const UserHeader = () => {
  const userNavigation = [
    { id: 1, title: "Запросы", path: "/user" },
    { id: 2, title: "Для вас", path: "/user/offer" },
    { id: 3, title: "Профиль", path: "/user/profile" },
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
      {router.pathname.includes("user") ? (
        <>
          <nav className={s.nav}>
            {userNavigation.map(({ id, path, title }) => (
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

export default UserHeader;
