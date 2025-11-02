import React, { useEffect, useState } from "react";

const Message = ({ data }) => {
  const [clsname, setClsName] = useState("");

  useEffect(() => {
    let str1 = data.res == "user" ? "user-text" : "ai-text";
    setClsName(str1);
  }, [data]);

  useEffect(() => {
    let str1 = data.res == "user" ? "user-text" : "ai-text";
    setClsName(str1);
  }, []);
  return (
    <>
      <div className={clsname}>
        <div className={`msg ${data.res}`}>
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
