import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from "./Header.module.scss";
import { message } from "antd";
import Burger from "../ui/burger/Burger";

const OperatorHeader = () => {
  const operatorNavigation = [
    { id: 2, title: "Все заявки", path: "/operator" },
    { id: 1, title: "Мои заявки", path: "/operator/myapplications" },
    { id: 3, title: "Выполненные", path: "/operator/finish" },
    { id: 4, title: "Список бригад", path: "/operator/brig" },
    { id: 5, title: "Регистрация", path: "/operator/teamregist" },
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
      {router.pathname.includes("operator") ? (
        <>
          <nav className={s.navigation}>
            <div>
              {operatorNavigation.map(({ id, path, title }) => (
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
              {log.map((link) => (
                <MyBtn key={link.id} onClick={() => logOut()}>
                  <Link href={link.path}>{link.title}</Link>
                </MyBtn>
              ))}
            </div>
          </nav>
          <Burger navig={operatorNavigation} log={log} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default OperatorHeader;
