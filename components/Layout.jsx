import { useRouter } from "next/router";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllApplications } from "@/store/reducers/applications";
import { getMyApplications } from "@/store/reducers/myApplications";
import { getBrigadeList } from "@/store/reducers/brigadeList";
import { getProfile } from "@/store/reducers/profile";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const { pathname } = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    dispatch(getAllApplications({access}))
    dispatch(getMyApplications({access}))
    dispatch(getBrigadeList({access}))
    dispatch(getProfile({access}))
  }, []);


  useEffect(() => {
    if (pathname === "/regist" || pathname === "/login" || pathname === "/reset") {
      setShow(false);
    } else{
      return setShow(true)
    }
  }, [pathname]);

  return (
    <>
      {show && <Header />}
      {children}
      {show && <Footer />}
    </>
  );
};

export default Layout;
