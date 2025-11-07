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

  const renderParagraphs = (text) => {
    if (!text) return null;

    // Normalize CRLF to LF
    const normalized = text.replace(/\r\n/g, "\n");

    // Split paragraphs by two or more consecutive newlines
    const paragraphs = normalized.split(/\n{2,}/);

    return paragraphs.map((para, pIdx) => {
      // Within a paragraph, split single newlines into <br/>
      const lines = para.split(/\n/);
      return (
        <p key={pIdx} className="msg-paragraph">
          {lines.map((line, lIdx) => (
            <React.Fragment key={lIdx}>
              {line}
              {lIdx < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    });
  };
  // return (
  //   <>
  //     <div className={clsname}>
  //       <div className={`msg ${data.res}`}>
  //         <p>{data.text}</p>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div className={clsname}>
      <div className={`msg ${data.res}`}>{renderParagraphs(data.text)}</div>
    </div>
  );
};

export default Message;
