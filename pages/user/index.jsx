import React, { useEffect, useState } from 'react';
import UserList from '@/components/ClientPage/userList/UserList';
import Error from '../404';
import { useRouter } from 'next/router';


const MyTable = () => {
  const [userInfo, setUserInfo] = useState(null)
  const{pathname} = useRouter()
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [pathname])

  return (
    <>
    {userInfo
    ? <UserList />
    : ""}
    </>
  );
};

export default MyTable;


