import Link from 'next/link';
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from './Header.module.scss';
import DefaultHeader from './DefaultHeader';
import { message } from 'antd';

const BrigadeHeader = () => {
  const brigadeNavigation = [
    { id: 1, title: "Наши заявки", path: "/brigade" },
    { id: 2, title: "Выполнены", path: "/brigade/done" },
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
    {router.pathname.includes("brigade") ? (
            <>
                <nav className={s.nav}>
                {brigadeNavigation.map(({ id, path, title }) => (
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

export default BrigadeHeader;