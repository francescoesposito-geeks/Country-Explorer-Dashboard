import { useRef } from "react";

export function SearchBar({ onSubmit, onReset }) {
  const inputRef = useRef(null);

  function onHandleClick() {
    if (inputRef.current.value === "") {
      return;
    } else {
      onSubmit(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="insert country" />
        <button onClick={onHandleClick}> submit </button>
        <button onClick={onReset}> RESET </button>
      </div>
    </>
  );
}
