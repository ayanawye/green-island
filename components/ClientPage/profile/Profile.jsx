import { BASE_URL } from "@/base_url/BASE_URL";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Prodile from "../../../assets/images/profile.png";
import s from "../User.module.scss";
import { Descriptions, Table } from "antd";

const ProfileUser = () => {
  const [data, setdata] = useState([
    {
      company_name: "",
      address: "",
      phone: "",
      email: "",
    },
  ]);
  // useEffect(() => {
  //   const resp = axios.get(`${BASE_URL}/`)
  // }, [])
  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <section>
      <div>
        <div className={s.image}>
          <Image
            className={s.img}
            alt="png profile"
            src={Prodile}
            placeholder="blur"
          />
        </div>
        <div>
          <Descriptions title="User Profile" layout="horizontal" column={1}>
            <Descriptions.Item label="Email">
              user@example.com
            </Descriptions.Item>
            <Descriptions.Item label="Company Name">
              Example Company
            </Descriptions.Item>
            <Descriptions.Item label="Phone">+123456789</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
