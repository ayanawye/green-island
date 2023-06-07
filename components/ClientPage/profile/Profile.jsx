import Image from "next/image";
import React, { useEffect, useState } from "react";
import Prodile from "../../../assets/images/profile.png";
import s from "../User.module.scss";
import { Button, Descriptions } from "antd";
import { getProfile } from "@/requests/Profile";
import UpdateProfile from "../modal/UpdateProfile";

const ProfileUser = () => {
  const [data, setdata] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("userInfo"));
    const access = resp.access;
    const id = resp.user_id;
    getProfile(`/client-profile/${id}/`, access, setdata);
  }, [modal]);

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
          {data && (
            <div>
              <Descriptions title="Профиль" layout="horizontal" column={1}>
                <Descriptions.Item label="Почта">
                  {data.email}
                </Descriptions.Item>
                <Descriptions.Item label="Название компании">
                  {data.company_name.replace(/[^a-zа-яё0-9+\s]/gi, "")}
                </Descriptions.Item>
                <Descriptions.Item label="Адрес компании">
                  {data.address.replace(/[^a-zа-яё0-9+\s]/gi, "")}
                </Descriptions.Item>
                <Descriptions.Item label="Номер телефона">
                  {data.phone.replace(/[^a-zа-яё0-9+\s]/gi, "")}
                </Descriptions.Item>
              </Descriptions>
              <div className={s.btn}>
                <Button type="primary" onClick={() => setModal(!modal)}>Изменить</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <UpdateProfile open={modal} close={() => setModal(!modal)} data={data} />
    </section>
  );
};

export default ProfileUser;
