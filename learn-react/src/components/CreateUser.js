import React, { useEffect, useRef } from "react";

function CreateUser({ onCreate, onChange, email, name }) {
  const inputRef = useRef();

  useEffect(() => {
    console.log("counter 렌더링");
  });

  useEffect(() => {
    console.log("CreateUser 마운트 됨");
  }, []);

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        ref={inputRef}
      />
      <input type="email" name="email" onChange={onChange} value={email} />
      <button
        onClick={() => {
          onCreate();
          inputRef.current.focus();
        }}
      >
        등록
      </button>
    </div>
  );
}

export default React.memo(CreateUser);
