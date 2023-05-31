import React, { useEffect, useNavigate, useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import MyBtn from "../ui/button/MyBtn";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../assets/images/logo2.png";
import { Select, Space } from "antd";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  useLocalStorage,
} from "@/hooks/useLocalStorage";
import DefaultHeader from "./DefaultHeader";
import UserHeader from "./UserHeader";
import OperatorHeader from "./OperatorHeader";
import BrigadeHeader from "./BrigadeHeader";

const Header = () => {
  const{pathname} = useRouter()
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])
  const defaultHeader = !pathname.includes("user") && !pathname.includes("operator") && !pathname.includes("brigade")

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}>
            <Image src={Logo} alt="logo" placeholder="blur" className={s.img} />
          </div>
          {defaultHeader ? <DefaultHeader /> : ""}
          <UserHeader />
          <OperatorHeader />
          <BrigadeHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
