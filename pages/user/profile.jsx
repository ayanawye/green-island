import React, { useEffect, useState } from 'react';
import Profile from '@/components/ClientPage/profile/Profile';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])

  return (
    <>
    {userInfo
    ? <Profile />
    : ""}
    </>
  );
};

export default Profile;