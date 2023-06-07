import React, { useEffect, useState } from 'react';
import BrigadeApplication from '@/components/BrigadePage/BrigadeApplication';
import { myApplications } from '@/requests/Applications';

const Done = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [applications, setApplication] = useState([]);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
    const access = resp.access;
    myApplications( access, setApplication);
  }, [])

  const filteredApplications = applications.filter(app => app.finished_by_brigade === true)

  return (
    <>
    {userInfo
    ? <BrigadeApplication  applications={filteredApplications} />
    : ""}
    </>
  );
};

export default Done;