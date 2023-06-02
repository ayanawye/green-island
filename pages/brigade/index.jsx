import React, { useEffect, useState } from 'react';
import Error from '../404';
import BrigadeApplication from '@/components/BrigadePage/BrigadeApplication';

const Brigade = () => {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])
  return (
    <>
    {userInfo
    ? <BrigadeApplication />
    : ""}
    </>
  );
};

export default Brigade;