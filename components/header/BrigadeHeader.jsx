import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from "./Header.module.scss";
import { message } from "antd";
import Burger from "../ui/burger/Burger";

const BrigadeHeader = () => {
  const brigadeNavigation = [
    { id: 1, title: "Активные заявки", path: "/brigade" },
    { id: 2, title: "Выполнены", path: "/brigade/finish" },
  ];
  const log = [
    { id: 1, title: "Выйти", path: "/" },
  ]

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
    }, 0);
  };
  return (
    <>
      {router.pathname.includes("brigade") ? (
        <>
          <nav className={s.navigation}>
            <div>
              {brigadeNavigation.map(({ id, path, title }) => (
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
          <Burger navig={brigadeNavigation} log={log} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default BrigadeHeader;
