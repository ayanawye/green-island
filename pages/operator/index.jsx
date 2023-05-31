  import { useEffect, useState } from "react";
import OperatorPage from "@/components/OperatorPage/OperatorPage";
import MyApplications from "@/components/OperatorPage/OperatorPage";

const Operator = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(resp);
  }, []);
  return (
    <>
      {userInfo 
      ? <MyApplications />
      : ""}
    </>
  );
};

export default Operator;
