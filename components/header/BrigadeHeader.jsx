import Link from 'next/link';
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import s from './Header.module.scss';
import DefaultHeader from './DefaultHeader';

const BrigadeHeader = () => {
  const brigadeNavigation = [
    { id: 1, title: "Наши заявки", path: "/brigade" },
    { id: 2, title: "Выполнены", path: "/brigade/done" },
  ];

  const { pathname } = useRouter();
  return (
    <>
    {pathname.includes("brigade") ? (
            <>
                <nav className={s.nav}>
                {brigadeNavigation.map(({ id, path, title }) => (
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

export default BrigadeHeader;