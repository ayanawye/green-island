import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import { useRouter } from "next/router";
import DefaultHeader from "./DefaultHeader";
import s from './Header.module.scss';
import { useEffect, useState } from "react";

const UserHeader = () => {
  const userNavigation = [
    { id: 1, title: "Запросы", path: "/user" },
    { id: 2, title: "Для вас", path: "/user/offer" },
    { id: 3, title: "Профиль", path: "/user/profile" },
  ];
  const { pathname } = useRouter();
  return (
    <>
      {pathname.includes("user") ? (
        <>
          <nav className={s.nav}>
            {userNavigation.map(({ id, path, title }) => (
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

export default UserHeader;
