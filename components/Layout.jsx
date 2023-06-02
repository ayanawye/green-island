import { useRouter } from "next/router";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const { pathname } = useRouter();
  
  useEffect(() => {
    if (pathname === "/regist" || pathname === "/login") {
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
