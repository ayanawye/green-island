import React, { useEffect, useState } from 'react';
import BrigadeApplication from '@/components/BrigadePage/BrigadeApplication';
import { useSelector } from 'react-redux';

const Done = () => {
  const [userInfo, setUserInfo] = useState(null)
  const {myApplications} = useSelector(state => state.myApplications)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])

  const filteredApplications = myApplications.filter(app => app.finished_by_brigade === true)

  return (
    <>
    {userInfo
    ? <BrigadeApplication  applications={filteredApplications} />
    : ""}
    </>
  );
};

export default Done;