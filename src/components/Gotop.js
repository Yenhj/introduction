import { useEffect, useRef } from "react";
import Anime from "../assets/Anime";

const Gotop = () => {
  const style = {
    position: "fixed",
    right: 65,
    bottom: -200,
    zIndex: 9999999,
    cursor: "pointer",
    fontSize: "17px",
    color: "black",
    transition: "bottom 0.5s",
  };
  const img = {
    position: "fixed",
    right: 60,
    bottom: 120,
    width: 60,
    height: 70,
  };
  //   스크롤 위치 값 파악하기
  const bt = useRef(null);
  const scrollFN = () => {
    // 스크롤 값 파악하여서 if 문 사용하기
    const scY = window.document.documentElement.scrollTop;
    if (scY > 300) {
      bt.current.classList.add("active");
    } else {
      bt.current.classList.remove("active");
    }
    console.log(scY);
  };

  useEffect(() => {
    scrollFN();
    window.addEventListener("scroll", scrollFN);
    return () => {
      window.removeEventListener("scroll", scrollFN);
    };
  }, []);

  return (
    <div
      ref={bt}
      style={style}
      onClick={() => {
        new Anime(window, {
          prop: "scroll",
          value: 0,
          duration: 500,
        });
      }}
    >
      <img src="/images/logo.png" alt="" style={img} />
      GoTop
    </div>
  );
};

export default Gotop;
