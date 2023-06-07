import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from "./Header.module.scss";
import { message } from "antd";
import Burger from "../ui/burger/Burger";

const UserHeader = () => {
  const userNavigation = [
    { id: 1, title: "Заявки", path: "/user" },
    { id: 2, title: "Выполненные", path: "/user/finish" },
    { id: 3, title: "Профиль", path: "/user/profile" },
  ];
  const log = [{ id: 1, title: "Выйти", path: "/" }];

  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("userInfo");
    message.open({
      type: "success",
      content: "Вы вышли с аккаунта",
      style: {
        marginTop: "100px",
      },
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <>
      {router.pathname.includes("user") ? (
        <>
          <nav className={s.navigation}>
            <div>
              {userNavigation.map(({ id, path, title }) => (
                <Link
                  href={path}
                  key={id}
                  className={router.pathname === path ? s.active : s.link}
                >
                  {title}
                </Link>
              ))}
            </div>
              <div className={s.btn}>
                <MyBtn onClick={() => logOut()}>
                  <Link href="/">Выйти</Link>
                </MyBtn>
              </div>
          </nav>
          <Burger navig={userNavigation} log={log} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserHeader;
