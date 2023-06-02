import { Radio } from "antd";
import { useState } from "react";
import OperatorRegist from "../registration/Operator/Operator";
import BrigadeRegist from "../registration/Brigade/BrigadeRegist";
import s from "./OperatorPage.module.scss";

const TeamRegist = () => {
  const [userType, setUserType] = useState("OPERATOR");
  return (
    <>
      <section className={s.team}>
        <div className={s.container}>
          <div className={s.regist}>
            <div className={s.content}>
              <Radio.Group
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <Radio.Button value="OPERATOR">Оператор</Radio.Button>
                <Radio.Button value="BRIGADE">Бригада</Radio.Button>
              </Radio.Group>
              {userType === "OPERATOR" ? <OperatorRegist /> : <BrigadeRegist />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamRegist;
