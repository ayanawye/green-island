import Image from "next/image";
import React, { useEffect, useState } from "react";
import Prodile from "../../../assets/images/profile.png";
import s from "../User.module.scss";
import { Button, Descriptions } from "antd";
import UpdateProfile from "../modal/UpdateProfile";
import { useSelector } from "react-redux";

const ProfileUser = () => {
  const [data, setdata] = useState(null);
  const [modal, setModal] = useState(false);
  const profile = useSelector(state => state.profile.profile)

  // useEffect(() => {
  //   setdata(profile)
  // }, []);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.image}>
            <Image
              className={s.img}
              alt="png profile"
              src={Prodile}
              placeholder="blur"
            />
          </div>
          {profile ? (
            <div>
              <Descriptions title="Профиль" layout="horizontal" column={1}>
                <Descriptions.Item label="Почта">
                  {profile.email}
                </Descriptions.Item>
                <Descriptions.Item label="Название компании">
                  {profile.company_name}
                </Descriptions.Item>
                <Descriptions.Item label="Адрес компании">
                  {profile.address}
                </Descriptions.Item>
                <Descriptions.Item label="Номер телефона">
                  {profile.phone}
                </Descriptions.Item>
              </Descriptions>
              <div className={s.btn}>
                <Button type="primary" onClick={() => setModal(!modal)}>Изменить</Button>
              </div>
            </div>
          ) :
            ""
          }
        </div>
      </div>
      <UpdateProfile open={modal} close={() => setModal(!modal)} data={profile} />
    </section>
  );
};

export default ProfileUser;
