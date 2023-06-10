import React, { useEffect, useState } from 'react';
import BrigadeApplication from '@/components/BrigadePage/BrigadeApplication';
import { useSelector } from 'react-redux';

const Brigade = () => {
  const [userInfo, setUserInfo] = useState(null)
  const {myApplications} = useSelector(state => state.myApplications)

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"))
    setUserInfo(resp)
  }, [])

  const activeApplication = myApplications.filter(app => app.finished_by_brigade !== true)

  return (
    <>
    {userInfo
    ? <BrigadeApplication applications={activeApplication}/>
    : ""}
    </>
  );
};

export default Brigade;