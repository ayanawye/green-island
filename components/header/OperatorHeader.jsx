import Link from 'next/link';
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from './Header.module.scss';

const OperatorHeader = () => {
  const operatorNavigation = [
    { id: 2, title: "Мои заявки", path: "/operator" },
    { id: 1, title: "Все заявки", path: "/operator/applications" },
    { id: 3, title: "Список бригад", path: "/operator/brig" },
    { id: 4, title: "Регистрация", path: "/operator/teamregist" },
  ];

  const { pathname } = useRouter();
  return (
    <>
    {pathname.includes("operator") ? (
            <>
              <nav className={s.nav}>
              {operatorNavigation.map(({ id, path, title }) => (
                  <Link
                    href={path}
                    key={id}
                    className={pathname === path ? s.active : s.link}
                  >
                    {title}
                  </Link>
              ))}
              </nav>
              <div className={s.flex}>
                <Link href="/operator/profile"></Link>
                <div className={s.btn}>
                  <MyBtn>
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