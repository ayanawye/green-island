  import { useEffect, useState } from "react";
import AllApplications from "@/components/OperatorPage/AllApplications";

const Operator = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(resp);
  }, []);
  return (
    <>
      {userInfo 
      ? <AllApplications />
      : ""}
    </>
  );
};

export default Operator;
