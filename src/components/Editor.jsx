import "../css/Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(3);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터 눌러도 데이터 추가됨
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    // 아무것도 쓰지 않고 저장 누르면 input에 포커스
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    // 저장 후 input 내에 남아있는 내용 비우기
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
