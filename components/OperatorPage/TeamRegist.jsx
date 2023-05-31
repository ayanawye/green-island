import { Radio } from "antd";
import { useState } from "react";
import OperatorRegist from "../registration/Operator/Operator";
import BrigadeRegist from "../registration/Brigade/BrigadeRegist";

const TeamRegist = () => {
  const [userType, setUserType] = useState("OPERATOR");
  return (
    <>
      <section>
        <div>
          <Radio.Group
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <Radio.Button value="OPERATOR">Оператор</Radio.Button>
            <Radio.Button value="BRIGADE">Бригада</Radio.Button>
          </Radio.Group>
          {userType === "OPERATOR" ? <OperatorRegist /> : <BrigadeRegist />}
        </div>
      </section>
    </>
  );
};

export default TeamRegist;