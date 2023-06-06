import ProfileUser from '@/components/ClientPage/profile/Profile';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])

  return (
    <>
    {userInfo
    ? <ProfileUser />
    : ""}
    </>
  );
};

export default Profile;