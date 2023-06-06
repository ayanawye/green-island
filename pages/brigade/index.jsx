import React, { useEffect, useState } from 'react';
import BrigadeApplication from '@/components/BrigadePage/BrigadeApplication';
import { myApplications } from '@/requests/Applications';

const Brigade = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [applications, setApplication] = useState([]);
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
    const access = resp.access;
    myApplications( access, setApplication);
  }, [])

  return (
    <>
    {userInfo
    ? <BrigadeApplication applications={applications} />
    : ""}
    </>
  );
};

export default Brigade;