import React, { useEffect, useState } from 'react';
import Error from '../404';

const profile = () => {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])
  return (
    <>
    {userInfo
    ? <h1>Пофиль</h1>
    : <Error />}
    </>
  );
};

export default profile;