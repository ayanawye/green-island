import React, { useEffect, useState } from 'react';
import Error from '../404';

const Brigade = () => {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])
  return (
    <>
    {userInfo
    ? <h1>fghj</h1>
    : ""}
    </>
  );
};

export default Brigade;